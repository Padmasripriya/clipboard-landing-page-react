import React from "react";
import CompanyLogo from "../Images/logo.svg";

export function HeroHeaderModule() {
    return(
        <div className="hero-header-module">
        <img className="company-logo" src={CompanyLogo} alt="company logo" />
        <h3 className="hero-header-title fs-1 fw-bold mb-3">A history of everything you copy</h3>
        <p className="hero-header-content mb-5">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all devices.</p>
        <button className="ios-download-button mb-4">Download for iOS</button>
        <button className="mac-download-button mb-5">Download for Mac</button>
        </div>
    );
}

export default HeroHeaderModule;