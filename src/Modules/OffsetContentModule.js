import React from 'react';
import ComputerImage from "../Images/image-computer.png";

export function OffsetContentModule() {
    return(
        <div className="offset-content-module">
           <div className="offset-image-left">
               <img src={ComputerImage} alt="computer image" />
           </div> 
           <div className="offset-content-right">
               <h3 className="fw-bold mt-5">Quick Search</h3>
               <p className="px-4 px-md-0">Easily search your snippets by content, category, web address, application, and more.</p>
               <h3 className="fw-bold">iCloud Sync</h3>
               <p className="px-4 px-md-0">Instantly saves and syncs snippets across all your devices.</p>
               <h3 className="fw-bold">Complete History</h3>
               <p className="px-4 px-md-0">Retrieves any snippets from the first moment you started using the app.</p>
           </div> 
        </div>
    );
}

export default OffsetContentModule;