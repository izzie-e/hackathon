import React from "react";
import "../styles/Office.css";
import trashcanPic from "../images/trashcan.png"

export default function Trash(props) {
  let sendItem = "trash";


  return (
    <div
      className="bin interact"
      onClick={() => props.handleItemClick(sendItem)}
      style={
        props.triggeredObject === "" || props.triggeredObject === "trash"
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <img src={trashcanPic} style={{height:"100px"}}/>
      {props.triggeredObject === "trash" && (
            <div className="message"
            style={{marginTop: "100px", lineHeight: "15px"}}
            >
              <h1 className="text-center">Chores</h1>
              <p>Take 5 minutes to clean up your space</p>
              <p>If everything is clean then have a short break</p>
              
              <button 
              className="button"
              onClick={() => sendItem = ""}
              >
                Continue
                </button>
            </div>)
            }
    </div>
  );
}
