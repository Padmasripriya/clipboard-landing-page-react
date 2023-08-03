import React from "react";
import CompanyLogo from "../Images/logo.svg";
import FacebookLogo from "../Images/icon-facebook.svg";
import TwitterLogo from "../Images/icon-twitter.svg";
import InstagramLogo from "../Images/icon-instagram.svg";

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
            <div className="install-guide mb-5">
                <p>Install Guide</p>
            </div>
            <div className="social-links">
                <img className="px-4" src={FacebookLogo} alt="facebook logo" />
                <img className="px-4" src={TwitterLogo} alt="twitter logo" />
                <img className="px-4" src={InstagramLogo} alt="instagram logo" />
            </div>
        </div>
    );
}

export default FooterModule;