(this["webpackJsonphill-chart"]=this["webpackJsonphill-chart"]||[]).push([[0],{149:function(e,t,a){},168:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(83),s=a.n(c),i=(a(149),a(22)),l=a(4),o=a(5),d=a(6),u=a(7),h=a(20),p=a(13),m=a.n(p),j="https://pebbletor.herokuapp.com",b="".concat(j,"/hills"),v="".concat(j,"/markers"),f=function(e){return m.a.delete("".concat(b,"/").concat(e))},O=function(e){return m.a.post(v,e)},k=function(e){return m.a.delete("".concat(v,"/").concat(e))},x=function(e,t){var a;return function(){for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];clearTimeout(a),a=setTimeout((function(){return e.apply(void 0,n)}),t)}}((function(e,t){m.a.post("".concat(v,"/").concat(e),t)}),200),_=(a(168),a(42),a(0)),g=function(e){return Object(_.jsx)("svg",{className:"icon ".concat(e.className),fill:e.fill,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(_.jsx)("path",{d:"M424 64h-88V48c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16H88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zM208 48c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96zM78.364 184a5 5 0 00-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042a5 5 0 00-4.994-5.238zM320 224c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"})})},N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={hills:[]},e.deleteHill=function(t){f(t).then((function(){var a=e.state.hills.filter((function(e){return e._id!==t}));e.setState({hills:a})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get(b).then((function(t){return e.setState({hills:[].concat(Object(i.a)(e.state.hills),Object(i.a)(t.data))})}))}},{key:"render",value:function(){var e=this;return Object(_.jsxs)("div",{className:"home",children:[Object(_.jsx)("h1",{className:"home__title",children:"Showing all hill charts"}),this.state.hills.map((function(t,a){return Object(_.jsxs)("div",{className:"card hill-card",children:[Object(_.jsx)(h.b,{to:"/hill/".concat(t._id),className:"hill-card__link",children:Object(_.jsx)("h1",{children:t.name})}),Object(_.jsxs)("p",{className:"hill-card__author",children:["by ",t.author]}),Object(_.jsx)("p",{className:"hill-card__description",children:t.description}),Object(_.jsxs)("div",{className:"hill-card__data",children:[Object(_.jsxs)("div",{className:"hill-card__dates",children:[Object(_.jsxs)("p",{className:"hill-card__date",children:["Created ",new Date(t.createdAt).toUTCString()]}),t.updatedAt&&Object(_.jsxs)("p",{className:"hill-card__date",children:["Last updated ",new Date(t.updatedAt).toUTCString()]})]}),Object(_.jsx)("button",{onClick:function(){return e.deleteHill(t._id)},className:"hill-card__delete",children:Object(_.jsx)(g,{})})]})]},a)}))]})}}]),a}(n.a.Component),M=a(8),w=a(2),C=(a(174),function(){var e=Object(r.useState)(""),t=Object(M.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(M.a)(c,2),i=s[0],l=s[1],o=Object(r.useState)(""),d=Object(M.a)(o,2),u=d[0],h=d[1],p=Object(r.useState)(!1),j=Object(M.a)(p,2),v=j[0],f=j[1];return v?Object(_.jsx)(w.a,{to:"/"}):Object(_.jsxs)("div",{className:"create",children:[Object(_.jsx)("h1",{className:"create__title",children:"Create a hill chart"}),Object(_.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),(t={name:a,description:i,author:u},m.a.post(b,t)).then((function(e){f(!0)}))},className:"card create__form",children:[Object(_.jsx)("label",{className:"create__label",children:"Hill chart name: "}),Object(_.jsx)("input",{type:"text",className:"create__input",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(_.jsx)("label",{className:"create__label",children:"Hill chart description: "}),Object(_.jsx)("textarea",{className:"create__input",required:!0,value:i,onChange:function(e){return l(e.target.value)}}),Object(_.jsx)("label",{className:"create__label",children:"Hill chart author: "}),Object(_.jsx)("input",{type:"text",className:"create__input",required:!0,value:u,onChange:function(e){return h(e.target.value)}}),Object(_.jsx)("span",{children:Object(_.jsx)("button",{className:"create__save",type:"submit",children:"Save"})})]})]})}),y=(a(175),function(){var e=Object(r.useState)(""),t=Object(M.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(M.a)(c,2),i=s[0],l=s[1],o=Object(r.useState)(""),d=Object(M.a)(o,2),u=d[0],h=d[1];return Object(_.jsxs)("div",{className:"create",children:[Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(_.jsx)("label",{children:"Hill chart name: "}),Object(_.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(_.jsx)("label",{children:"Hill chart description: "}),Object(_.jsx)("textarea",{required:!0,value:i,onChange:function(e){return l(e.target.value)}}),Object(_.jsx)("label",{children:"Hill chart author: "}),Object(_.jsx)("input",{type:"text",required:!0,value:u,onChange:function(e){return h(e.target.value)}}),Object(_.jsx)("button",{type:"submit",children:"Save"})]}),Object(_.jsx)("p",{children:a}),Object(_.jsx)("p",{children:i}),Object(_.jsx)("p",{children:u})]})}),S=(a(176),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={checked:!0},e.setTheme=function(t){"light-theme"===t?e.setState({checked:!1}):e.setState({checked:!0}),localStorage.setItem("theme",t),document.querySelector("body").className=t},e.onClick=function(){var t=!e.state.checked?"dark-theme":"light-theme";e.setTheme(t)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){"dark-theme"===localStorage.getItem("theme")?this.setTheme("dark-theme"):this.setTheme("light-theme")}},{key:"render",value:function(){return this.state.checked?Object(_.jsx)("div",{className:"theme-switch",children:Object(_.jsx)("button",{className:"theme-switch--button",onClick:this.onClick,children:Object(_.jsx)("svg",{className:"theme-switch--icon-sun",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 302.4 302.4",children:Object(_.jsx)("path",{d:"M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"})})})}):Object(_.jsx)("div",{className:"theme-switch",children:Object(_.jsx)("button",{className:"theme-switch--button",onClick:this.onClick,children:Object(_.jsx)("svg",{className:"theme-switch--icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001",children:Object(_.jsx)("path",{d:"M470.218 159.659c-25.647-63.265-74.558-112.8-137.723-139.482C292.332 3.211 248.327-3.24 205.246 1.525c-18.368 2.031-32.9 15.609-36.161 33.787-3.253 18.138 5.634 35.881 22.115 44.151 31.723 15.917 56.581 42.823 69.997 75.762 30.531 74.958-5.539 160.805-80.403 191.367-32.893 13.427-69.478 14.45-103.019 2.88-17.422-6.01-36.334.042-47.056 15.061-10.702 14.991-10.283 34.805 1.04 49.306 26.682 34.168 62.01 61.167 102.167 78.08C165.931 505.399 199.648 512 233.149 512c57.539-.001 114.432-19.478 160.852-57.037 8.587-6.948 9.917-19.542 2.968-28.13-6.948-8.589-19.543-9.916-28.13-2.968-61.963 50.137-146.025 62.086-219.386 31.189-33.879-14.269-63.675-37.034-86.165-65.835-.396-.507-.544-.697-.011-1.443.567-.795.864-.691 1.454-.487 42.714 14.734 89.302 13.434 131.18-3.661 95.269-38.892 141.175-148.121 102.332-243.492-17.073-41.917-48.717-76.162-89.104-96.427-.598-.299-.845-.423-.682-1.335.176-.978.534-1.017 1.184-1.089 36.303-4.014 73.405 1.429 107.287 15.742 53.315 22.52 94.587 64.307 116.216 117.66 21.631 53.358 21.12 112.131-1.438 165.493a220.025 220.025 0 01-3.42 7.677c-4.687 10.004-.378 21.911 9.626 26.599 10.004 4.686 21.911.375 26.598-9.626a262.49 262.49 0 004.042-9.073c26.717-63.2 27.309-132.842 1.666-196.098z"})})})})}}]),a}(n.a.Component)),A=(a(177),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(_.jsxs)("nav",{className:"navbar",children:[Object(_.jsx)(h.b,{to:"/",className:"navbar__brand",children:"PEBBLETOR"}),Object(_.jsxs)("ul",{className:"navbar__nav",children:[Object(_.jsx)("li",{className:"navbar__item",children:Object(_.jsx)(S,{})}),Object(_.jsx)("li",{className:"navbar__item",children:Object(_.jsx)(h.b,{to:"/",className:"navbar__link",children:"Hill Charts"})}),Object(_.jsx)("li",{className:"navbar__item",children:Object(_.jsx)(h.b,{to:"/create",className:"navbar__link create",children:"Create"})})]})]})}}]),a}(n.a.Component)),P=a(87),I=a(32),z=function e(){Object(l.a)(this,e)};z.getPointAtPercentage=function(e,t){var a=e.getTotalLength()/100*t,r=e.getPointAtLength(a);return[r.x,r.y]},z.getClosestPoint=function(e,t){for(var a,r,n,c,s,i=e.getTotalLength(),l=8,o=0,d=1/0,u=0;u<=i;u+=l)(s=f(c=e.getPointAtLength(u)))<d&&(n=c,o=u,d=s);for(l/=2;l>.5;){var h,p,m,j,b,v;m=o-l,b=f(h=e.getPointAtLength(m)),m>=0&&b<d?(n=h,o=m,d=b):(j=o+l)<=i&&(v=f(p=e.getPointAtLength(j)))<d?(n=p,o=j,d=v):l/=2}return n=[null===(a=n)||void 0===a?void 0:a.x,null===(r=n)||void 0===r?void 0:r.y];function f(e){var a=e.x-t[0],r=e.y-t[1];return a*a+r*r}};var D,H=a(14);a(179);!function(e){e.Inactive="inactive",e.Active="active",e.Complete="complete"}(D||(D={}));var R,T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).markerRef=n.a.createRef(),r.drag=r.drag.bind(Object(I.a)(r)),r.click=r.click.bind(Object(I.a)(r)),r}return Object(o.a)(a,[{key:"drag",value:function(e){if(void 0!==this.props.selectedMarker&&this.props.marker._id===this.props.selectedMarker._id){var t=this.props.svg,a=H.d(e,t),r=z.getClosestPoint(this.props.line,a),n=Object(P.a)({},this.props.marker);n.currentPos=r,r[0]<101?n.status=D.Inactive:r[0]>1099?n.status=D.Complete:n.status=D.Active,this.props.updateMarker(n)}}},{key:"click",value:function(){this.props.selectMarker(this.props.marker)}},{key:"componentDidMount",value:function(){var e=this,t=H.b().on("drag",this.drag),a=this.props.marker.currentPos;0===a.length&&(a=z.getPointAtPercentage(this.props.line,this.props.marker.percentage));var r=this.props.markers.filter((function(e){return e.status===D.Inactive})).findIndex((function(t){return t._id===e.props.marker._id}));r>-1&&(a=[110,70+50*r]);var n=this.props.markers.filter((function(e){return e.status===D.Complete})).findIndex((function(t){return t._id===e.props.marker._id}));n>-1&&(a=[1e3,70+50*n]);var c=H.e(this.markerRef.current).attr("transform","translate("+a+")");c.append("circle").attr("r",10).style("fill",this.props.marker.colour).call(t),c.append("text").attr("transform","translate("+[-10,-20]+")").text(this.props.marker.name),c.on("click",this.click)}},{key:"componentDidUpdate",value:function(){var e=this,t=H.b().on("drag",this.drag),a=H.e(this.markerRef.current);a.selectAll("text").remove(),a.selectAll("circle").remove(),a.append("circle").attr("r",10).style("fill",this.props.marker.colour).call(t),this.props.marker._id===this.props.selectedMarker._id&&a.append("circle").attr("r",12).attr("class","selected-marker").style("fill","none").style("stroke-width",2),a.append("text").attr("transform","translate("+[-10,-20]+")").text(this.props.marker.name);var r=this.props.markers.filter((function(e){return e.status===D.Inactive})).findIndex((function(t){return t._id===e.props.marker._id})),n=this.props.marker.currentPos;r>-1&&(n=[110,70+50*r]);var c=this.props.markers.filter((function(e){return e.status===D.Complete})).findIndex((function(t){return t._id===e.props.marker._id}));c>-1&&(n=[1e3,70+50*c]),0!==this.props.marker.currentPos.length&&(this.props.marker.isNewPercentage&&(n=z.getPointAtPercentage(this.props.line,this.props.marker.percentage)),a.attr("transform","translate("+n+")")),this.props.marker.currentPos=n,this.props.marker.isNewPercentage=!1}},{key:"render",value:function(){return Object(_.jsx)("g",{ref:this.markerRef})}}]),a}(n.a.Component),q=function(e){return Object(_.jsxs)("svg",{className:"icon ".concat(e.className),fill:e.fill,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(_.jsx)("path",{d:"M14.25 0H2.75C1.23 0 0 1.23 0 2.75v15.5C0 19.77 1.23 21 2.75 21h6.59a8.731 8.731 0 01-.84-3.75c0-1.15.22-2.25.63-3.26-.04.01-.08.01-.13.01H4c-.55 0-1-.45-1-1s.45-1 1-1h5c.38 0 .72.22.88.54A8.827 8.827 0 0112.36 10H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1 0 .05 0 .09-.01.13.93-.38 1.95-.6 3.01-.62V2.75C17 1.23 15.77 0 14.25 0zM8 6H4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1z"}),Object(_.jsx)("path",{d:"M17.25 10.5c-3.722 0-6.75 3.028-6.75 6.75S13.528 24 17.25 24 24 20.972 24 17.25s-3.028-6.75-6.75-6.75zM20 18.25h-1.75V20a1 1 0 01-2 0v-1.75H14.5a1 1 0 010-2h1.75V14.5a1 1 0 012 0v1.75H20a1 1 0 010 2z"})]})},L=function(e){return Object(_.jsxs)("svg",{className:"icon ".concat(e.className),fill:e.fill,viewBox:"0 0 512 511",xmlns:"http://www.w3.org/2000/svg",children:[Object(_.jsx)("path",{d:"M405.332 256.484c-11.797 0-21.332 9.559-21.332 21.332v170.668c0 11.754-9.559 21.332-21.332 21.332H64c-11.777 0-21.332-9.578-21.332-21.332V149.816c0-11.754 9.555-21.332 21.332-21.332h170.668c11.797 0 21.332-9.558 21.332-21.332 0-11.777-9.535-21.336-21.332-21.336H64c-35.285 0-64 28.715-64 64v298.668c0 35.286 28.715 64 64 64h298.668c35.285 0 64-28.714 64-64V277.816c0-11.796-9.54-21.332-21.336-21.332zm0 0"}),Object(_.jsx)("path",{d:"M200.02 237.05a10.793 10.793 0 00-2.922 5.438l-15.082 75.438c-.703 3.496.406 7.101 2.922 9.64a10.673 10.673 0 007.554 3.114c.68 0 1.387-.063 2.09-.211l75.414-15.082c2.09-.43 3.988-1.43 5.461-2.926l168.79-168.79-75.415-75.41zm0 0M496.383 16.102c-20.797-20.801-54.633-20.801-75.414 0l-29.524 29.523 75.414 75.414 29.524-29.527C506.453 81.465 512 68.066 512 53.816s-5.547-27.648-15.617-37.714zm0 0"})]})},B=(a(180),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).dropdownContentRef=n.a.createRef(),e.dropdownButtonRef=n.a.createRef(),e.edit=function(t){e.toggleDropdown(),e.props.selectMarker(t),e.props.selectModal("edit")},e.toggleDropdown=function(){var t,a=null===(t=e.dropdownContentRef.current)||void 0===t?void 0:t.style.display;e.dropdownContentRef.current.style.display="none"===a?"flex":"none"},e.hideDropdown=function(t){var a,r;(null===(a=e.dropdownContentRef.current)||void 0===a?void 0:a.contains(t.target))||(null===(r=e.dropdownContentRef.current)||void 0===r?void 0:r.contains(t.target))||(e.dropdownContentRef.current.style.display="none")},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("mousedown",this.hideDropdown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousedown",this.hideDropdown)}},{key:"render",value:function(){var e=this,t=!this.props.markers.some((function(t){return void 0!==e.props.selectedMarker&&t._id===e.props.selectedMarker._id})),a=0===this.props.markers.length,r=t&&!a?"dropdown__button disabled":"dropdown__button";return Object(_.jsxs)("div",{className:"toolbar",children:[Object(_.jsxs)("button",{className:"toolbar__button",onClick:function(){return e.props.selectModal("add")},children:[Object(_.jsx)(q,{className:"toolbar__icon"})," Add"]}),Object(_.jsxs)("div",{className:"toolbar__edit",children:[Object(_.jsxs)("button",{className:"toolbar__edit-button",disabled:t,onClick:function(){return e.props.selectModal("edit")},children:[Object(_.jsx)(L,{className:"toolbar__icon"}),Object(_.jsx)("span",{children:"Edit"})]}),Object(_.jsxs)("div",{className:"dropdown",children:[Object(_.jsx)("button",{className:r,disabled:a,ref:this.dropdownButtonRef,onClick:function(){return e.toggleDropdown()},children:"\u25bc"}),Object(_.jsx)("div",{className:"dropdown__content",style:{display:"none"},ref:this.dropdownContentRef,children:this.props.markers.map((function(t,a){return Object(_.jsxs)("button",{className:"dropdown__item",onClick:function(){return e.edit({_id:t._id,name:t.name})},children:[Object(_.jsx)("div",{style:{backgroundColor:t.colour},className:"dropdown__marker"}),t.name]},a)}))})]})]}),Object(_.jsxs)("button",{className:"toolbar__button delete",disabled:t,onClick:function(){return e.props.selectModal("delete")},children:[Object(_.jsx)(g,{className:"toolbar__icon"}),Object(_.jsx)("span",{children:"Delete"})]})]})}}]),a}(n.a.Component));!function(e){e.Gray="gray",e.Yellow="yellow",e.Orange="orange",e.Maroon="maroon",e.Red="red",e.Purple="purple",e.Fuchsia="fuchsia",e.Pink="pink",e.Green="green",e.Lime="lime",e.Olive="olive",e.Navy="navy",e.Blue="blue",e.Teal="teal",e.Aqua="aqua"}(R||(R={}));a(181);var V=function(e){var t,a,n,c,s=Object(r.useState)((null===(t=e.marker)||void 0===t?void 0:t.name)||""),i=Object(M.a)(s,2),l=i[0],o=i[1],d=Object(r.useState)((null===(a=e.marker)||void 0===a?void 0:a.percentage)||"50"),u=Object(M.a)(d,2),h=u[0],p=u[1],m=Object(r.useState)((null===(n=e.marker)||void 0===n?void 0:n.colour)||R.Gray),j=Object(M.a)(m,2),b=j[0],v=j[1],f=Object(r.useState)((null===(c=e.marker)||void 0===c?void 0:c.status)||D.Active),O=Object(M.a)(f,2),k=O[0],x=O[1];return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:"modal-form__header",children:[Object(_.jsx)("h2",{className:"modal-form__header-title",children:e.title}),Object(_.jsx)("button",{className:"modal-form__header-close",onClick:function(){return e.selectModal("")},children:"x"})]}),Object(_.jsxs)("form",{onSubmit:function(t){var a;if(t.preventDefault(),null===(a=e.marker)||void 0===a?void 0:a._id){var r,n,c={_id:e.marker._id,hillId:e.hillId,name:l,percentage:parseInt(h.toString()),isNewPercentage:h!==(null===(r=e.marker)||void 0===r?void 0:r.percentage)||(e.marker.status===D.Complete||e.marker.status===D.Inactive)&&k===D.Active,currentPos:(null===(n=e.marker)||void 0===n?void 0:n.currentPos)||[],colour:b,status:k};e.update(c)}else{var s,i,o={hillId:e.hillId,name:l,percentage:parseInt(h.toString()),isNewPercentage:h!==(null===(s=e.marker)||void 0===s?void 0:s.percentage)||(e.marker.status===D.Complete||e.marker.status===D.Inactive)&&k===D.Active,currentPos:(null===(i=e.marker)||void 0===i?void 0:i.currentPos)||[],colour:b,status:k};e.add(o)}e.selectModal("")},className:"modal-form__content",children:[Object(_.jsx)("label",{className:"modal-form__label",children:"Marker name: "}),Object(_.jsx)("input",{type:"text",className:"modal-form__input",required:!0,value:l,onChange:function(e){return o(e.target.value)}}),Object(_.jsx)("label",{className:"modal-form__label",children:"Marker percentage: "}),Object(_.jsx)("input",{type:"text",className:"modal-form__input",required:!0,value:h,onChange:function(e){return p(e.target.value)}}),Object(_.jsx)("label",{className:"modal-form__label",children:"Marker colour: "}),Object(_.jsx)("select",{className:"modal-form__input",required:!0,value:b,onChange:function(e){return v(e.target.value)},children:Object.keys(R).map((function(e){return Object(_.jsx)("option",{value:R[e],style:{color:R[e]},children:e})}))}),Object(_.jsx)("label",{className:"modal-form__label",children:"Marker status: "}),Object(_.jsx)("select",{className:"modal-form__input",required:!0,value:k,onChange:function(e){return x(e.target.value)},children:Object.keys(D).map((function(e){return Object(_.jsx)("option",{value:D[e],children:e})}))}),Object(_.jsxs)("div",{className:"modal-form__content-buttons",children:[Object(_.jsx)("button",{className:"modal-form__button",onClick:function(){return e.selectModal("")},children:"Cancel"}),Object(_.jsx)("button",{className:"modal-form__button save",type:"submit",children:"Save"})]})]})]})},E=(a(182),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;switch(this.props.modal){case"add":return Object(_.jsx)("div",{className:"modal",children:Object(_.jsx)("div",{className:"modal__card",children:Object(_.jsx)(V,{title:"Add Marker",hillId:this.props.hillId,add:this.props.add,update:this.props.update,selectModal:this.props.selectModal})})});case"edit":return Object(_.jsx)("div",{className:"modal",children:Object(_.jsx)("div",{className:"modal__card",children:Object(_.jsx)(V,{title:"Edit Marker",hillId:this.props.hillId,add:this.props.add,update:this.props.update,marker:this.props.marker,selectModal:this.props.selectModal})})});case"delete":return Object(_.jsx)("div",{className:"modal",children:Object(_.jsxs)("div",{className:"modal__card",children:[Object(_.jsxs)("div",{className:"modal-form__header",children:[Object(_.jsx)("h2",{className:"modal-form__header-title",children:"Delete Marker"}),Object(_.jsx)("button",{className:"modal-form__header-close",onClick:function(){return e.props.selectModal("")},children:"x"})]}),Object(_.jsxs)("div",{className:"modal-form__content",children:[Object(_.jsxs)("p",{className:"modal-form__text",children:["Are you sure you want to delete '",this.props.marker.name,"'?"]}),Object(_.jsxs)("div",{className:"modal-form__content-buttons",children:[Object(_.jsx)("button",{className:"modal-form__button",onClick:function(){return e.props.selectModal("")},children:"Cancel"}),Object(_.jsx)("button",{className:"modal-form__button delete",onClick:function(){e.props.delete(e.props.marker._id),e.props.selectModal("")},children:"Delete"})]})]})]})});default:return Object(_.jsx)(_.Fragment,{})}}}]),a}(n.a.Component)),F={_id:"",name:"",description:"",author:"",createdAt:0,updatedAt:0},U=(a(183),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={svg:null,line:null,hill:F,markers:[],activeModal:"",selectedMarker:{_id:"",name:""},isMarkerClick:!1},e.update=function(){return e.props.socket.emit("update-hill-markers",{room:e.props.id,markers:e.state.markers})},e.deselectMarker=function(){e.state.isMarkerClick||e.setState({selectedMarker:{_id:"",name:""}}),e.setState({isMarkerClick:!1})},e.selectMarker=function(t){e.setState({isMarkerClick:!0,selectedMarker:t})},e.addMarker=function(t){O(t).then((function(t){e.setState({markers:[].concat(Object(i.a)(e.state.markers),[t.data])},(function(){e.update()}))}))},e.updateMarker=function(t){var a=Object(i.a)(e.state.markers),r=a.findIndex((function(e){return e._id===t._id}));a[r]=t,e.setState({markers:a},(function(){e.update(),x(t._id,t)}))},e.deleteMarker=function(t){var a=Object(i.a)(e.state.markers),r=a.findIndex((function(e){return e._id===t}));a.splice(r,1),e.setState({markers:a},(function(){e.update(),k(t)}))},e.selectModal=function(t){e.setState({activeModal:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.socket.emit("hill-connect",this.props.id),this.props.socket.on("update-hill-markers",(function(t){return e.setState({markers:t})}));var t=H.c().curve(H.a),a=H.e("#hill__svg");a.on("click",this.deselectMarker);var r,n,c=a.append("path").datum(this.props.points).attr("d",t).attr("id","hill__path");a.append("path").datum([[600,400],[600,120]]).attr("d",H.c()).attr("class","hill__line"),a.append("text").attr("transform","translate("+[100,20]+")").attr("class","hill__text").text("Inactive"),a.append("text").attr("transform","translate("+[990,20]+")").attr("class","hill__text").text("Complete"),this.setState({svg:a.node(),line:c.node()}),(r=this.props.id,m.a.get("".concat(b,"/").concat(r))).then((function(t){return e.setState({hill:t.data})})),(n=this.props.id,m.a.get("".concat(v,"/hill/").concat(n))).then((function(t){return e.setState({markers:t.data})}))}},{key:"render",value:function(){var e=this;return Object(_.jsxs)("div",{className:"hill",children:[Object(_.jsx)("h1",{className:"hill__title",children:this.state.hill.name}),Object(_.jsx)("p",{className:"hill__subtitle",children:this.state.hill.description}),Object(_.jsx)("svg",{id:"hill__svg",width:this.props.size.width,height:this.props.size.height,children:this.state.markers.map((function(t){return Object(_.jsx)(T,{svg:e.state.svg,line:e.state.line,marker:t,markers:e.state.markers,selectedMarker:e.state.selectedMarker,selectMarker:e.selectMarker,updateMarker:e.updateMarker},t._id)}))}),Object(_.jsx)(B,{markers:this.state.markers,selectedMarker:this.state.selectedMarker,selectMarker:this.selectMarker,selectModal:this.selectModal}),Object(_.jsx)(E,{modal:this.state.activeModal,hillId:this.props.id,add:this.addMarker,update:this.updateMarker,delete:this.deleteMarker,marker:this.state.markers.find((function(t){return t._id===e.state.selectedMarker._id})),selectModal:this.selectModal})]})}}]),a}(n.a.Component)),G=(a(184),a(88)),J=Object(G.io)("/");var W=function(){return Object(_.jsx)(h.a,{children:Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(A,{}),Object(_.jsx)(w.d,{children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(w.b,{exact:!0,path:"/",children:Object(_.jsx)(N,{})}),Object(_.jsx)(w.b,{path:"/edit/:id",children:Object(_.jsx)(y,{})}),Object(_.jsx)(w.b,{path:"/create",children:Object(_.jsx)(C,{})}),Object(_.jsx)(w.b,{path:"/hill/:id",render:function(e){return Object(_.jsx)(U,{size:{width:1200,height:450},points:[[100,400],[300,350],[600,120],[900,350],[1100,400]],id:e.match.params.id,socket:J})}})]})})]})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,215)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(W,{})}),document.getElementById("root")),Y()},42:function(e,t,a){}},[[214,1,2]]]);
//# sourceMappingURL=main.45d2e4af.chunk.js.map