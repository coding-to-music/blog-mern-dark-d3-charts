const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

const app = express();
app.use(require("cors")());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/hills", require("./routes/hills"));
app.use("/markers", require("./routes/markers"));

app.get("/", (req, res) => {
  res.send("Hello to blog-mern-dark-d3-charts API");
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const root = path.join(__dirname, "frontend", "build");
//added /taylor-ecommerce/ because of the < bug
if (process.env.NODE_ENV === "production") {
  app.use(express.static(root));
  app.get("*", (req, res) => res.sendFile("index.html", { root }));
} else {
  app.get("/", (req, res) => {
    res.send("API IS RUNNING......");
  });
}

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let rooms = {};

io.on("connection", (socket) => {
  socket.on("hill-connect", (room) => {
    socket.join(room);
    if (rooms[room] === undefined) {
      rooms[room] = { users: {} };
    }
    rooms[room].users[socket.id] = socket.id; //pass in name of user and set that to the socket id once users are added
    socket.broadcast.to(room).emit("user-connected", socket.id);
  });
  socket.on("update-hill-markers", ({ room, markers }) => {
    socket.broadcast.to(room).emit("update-hill-markers", markers);
  });
  socket.on("disconnect", () => {
    getUserRooms(socket).forEach((room) => {
      socket.broadcast
        .to(room)
        .emit("user-disconnected", rooms[room].users[socket.id]);
      delete rooms[room].users[socket.id];
      if (isEmpty(rooms[room].users)) {
        delete rooms[room];
      }
    });
  });
});

function getUserRooms(socket) {
  return Object.entries(rooms).reduce((names, [name, room]) => {
    if (room.users[socket.id] != null) names.push(name);
    return names;
  }, []);
}

function isEmpty(obj) {
  for (var i in obj) {
    return false;
  }
  return true;
}

server.listen(port);
