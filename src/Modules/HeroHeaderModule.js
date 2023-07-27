import React from "react";
import CompanyLogo from "../Images/logo.svg";

export function HeroHeaderModule() {
    return(
        <div className="hero-header-module">
            <img className="company-logo" src={CompanyLogo} alt="company logo" />
        <h3 className="hero-header-title">A history of everything you copy</h3>
        <p className="hero-header-content">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all devices.</p>
        <button>Download for iOS</button>
        <button>Download for Mac</button>
        </div>
    );
}

export default HeroHeaderModule;