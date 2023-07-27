import React from "react";
import BlackListIcon from "../Images/icon-blacklist.svg";
import TextIcon from "../Images/icon-text.svg";
import PreviewIcon from "../Images/icon-preview.svg";

export function ThreeColumnModule() {
    return(
        <div className="three-column-module">
            <div className="first-column">
                <img className="icon" src={BlackListIcon} alt="blacklist icon"/>
                <h3 className="title">Create blacklists</h3>
                <p className="content">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>
            <div className="second-column">
                <img className="icon" src={TextIcon} alt="text icon"/>
                <h3 className="title">Plain text snippets</h3>
                <p className="content">Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
            <div className="third-column">
                <img className="icon" src={PreviewIcon} alt="preview icon"/>
                <h3 className="title">Sneak preview</h3>
                <p className="content">Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
        </div>
    );

}

export default ThreeColumnModule;