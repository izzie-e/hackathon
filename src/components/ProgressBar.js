import React from "react";

import "../styles/ProgressBar.css"


export default function ProgressBar(props) {
    const totalWidthAllowed = 900;
    let {desiredHours, workHours} = props;
    const percentageDone = workHours/desiredHours;
    let completedWidth = `${percentageDone * totalWidthAllowed}px`;
    
  return (
    <div >
        <div className="notDone"></div>
        <div className="done" style={{width: completedWidth }}></div>
        
    </div>
  );
}



