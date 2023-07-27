import React from "react";
import GoogleLogo from "../Images/logo-google.png";
import IBMLogo from "../Images/logo-ibm.png";
import MicrosoftLogo from "../Images/logo-microsoft.png";
import HPLogo from "../Images/logo-hp.png";
import VectorGraphicsLogo from "../Images/logo-vector-graphics.png";

export function LogosModule() {
    return(
        <div className="logos-module">
            <img className="logo" src={GoogleLogo} alt="Google logo">
            </img>
            <img className="logo" src={IBMLogo} alt="IBM logo">
            </img>
            <img className="logo" src={MicrosoftLogo} alt="Microsoft logo">
            </img>
            <img className="logo" src={HPLogo} alt="HP logo">
            </img>
            <img className="logo" src={VectorGraphicsLogo} alt="Vector Graphics logo">
            </img>
        </div>
    );
}

export default LogosModule;