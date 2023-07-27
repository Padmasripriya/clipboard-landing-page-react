import React from "react";
import CompanyLogo from "../Images/logo.svg";

export function FooterModule() {
    return(
        <div className="footer-module">
            <div className="icon">
                <img className="company-logo" src={CompanyLogo} alt="company logo" />
            </div>
            <div className="faq-contact">
                <p>FAQs</p>
                <p>Contact Us</p>
            </div>
            <div className="privacy-press">
                <p>Privacy Policy</p>
                <p>Press Kit</p>
            </div>
            <div className="install-guide">
                <p>Install Guide</p>
            </div>
            <div className="social-links">
                <p>FAQs</p>
                <p>Contact Us</p>
            </div>
        </div>
    );
}

export default FooterModule;