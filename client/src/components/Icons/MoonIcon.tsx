import { IIconProps } from "./interfaces/IIconProps";
import "./style/Icon.css";

const MoonIcon = (props: IIconProps) => {
    return (
        <svg className={`icon ${props.className}`} fill={props.fill} viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg">
            <path d="M470.218 159.659c-25.647-63.265-74.558-112.8-137.723-139.482C292.332 3.211 248.327-3.24 205.246 1.525c-18.368 2.031-32.9 15.609-36.161 33.787-3.253 18.138 5.634 35.881 22.115 44.151 31.723 15.917 56.581 42.823 69.997 75.762 30.531 74.958-5.539 160.805-80.403 191.367-32.893 13.427-69.478 14.45-103.019 2.88-17.422-6.01-36.334.042-47.056 15.061-10.702 14.991-10.283 34.805 1.04 49.306 26.682 34.168 62.01 61.167 102.167 78.08C165.931 505.399 199.648 512 233.149 512c57.539-.001 114.432-19.478 160.852-57.037 8.587-6.948 9.917-19.542 2.968-28.13-6.948-8.589-19.543-9.916-28.13-2.968-61.963 50.137-146.025 62.086-219.386 31.189-33.879-14.269-63.675-37.034-86.165-65.835-.396-.507-.544-.697-.011-1.443.567-.795.864-.691 1.454-.487 42.714 14.734 89.302 13.434 131.18-3.661 95.269-38.892 141.175-148.121 102.332-243.492-17.073-41.917-48.717-76.162-89.104-96.427-.598-.299-.845-.423-.682-1.335.176-.978.534-1.017 1.184-1.089 36.303-4.014 73.405 1.429 107.287 15.742 53.315 22.52 94.587 64.307 116.216 117.66 21.631 53.358 21.12 112.131-1.438 165.493a220.025 220.025 0 01-3.42 7.677c-4.687 10.004-.378 21.911 9.626 26.599 10.004 4.686 21.911.375 26.598-9.626a262.49 262.49 0 004.042-9.073c26.717-63.2 27.309-132.842 1.666-196.098z" />
        </svg>
    );
}

export default MoonIcon;