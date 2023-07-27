import React from "react";
import DevicesImage from "../Images/image-devices.png"

export function ImageModule() {
    return(
        <div className="image-module">
            <img src={DevicesImage} alt="devices image" />
        </div>
    );
}

export default ImageModule;