import React from "react";
import BlackListIcon from "../Images/icon-blacklist.svg";
import TextIcon from "../Images/icon-text.svg";
import PreviewIcon from "../Images/icon-preview.svg";

export function ThreeColumnModule() {
    return(
        <div className="three-column-module container">
            <div className="row">
               <div className="col first-column">
                  <img className="icon" src={BlackListIcon} alt="blacklist icon"/>
                  <h3 className="title fw-bold">Create blacklists</h3>
                  <p className="content px-4">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
               </div>
               <div className="col second-column">
                  <img className="icon" src={TextIcon} alt="text icon"/>
                  <h3 className="title fw-bold">Plain text snippets</h3>
                  <p className="content px-4">Remove unwanted formatting from copied text for a consistent look.</p>
               </div>
               <div className="col third-column">
                  <img className="icon" src={PreviewIcon} alt="preview icon"/>
                  <h3 className="title fw-bold">Sneak preview</h3>
                  <p className="content px-4">Quick preview of all snippets on your Clipboard for easy access.</p>
               </div>
            </div>
        </div>
    );

}

export default ThreeColumnModule;