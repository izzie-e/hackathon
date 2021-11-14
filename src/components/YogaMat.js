import React from "react";
import yogaPic from "../images/yoga.png"

import "../styles/Office.css"

export default function YogaMat (props) {
  let sendItem = "yogaMat"; //

    return (
        <div className="mat interact" 
        onClick={() => props.handleItemClick(sendItem)}
        style={
          props.triggeredObject === "" || props.triggeredObject === "yogaMat"
            ? { display: "block" }
            : { display: "none" }
        }>
            <img src={yogaPic} 
            alt="yoga mat"
            style={{height:"150px"}}
            ></img>
            {props.triggeredObject === "yogaMat" && (
            <div className="message text-left"
            style={{marginTop: "100px", marginLeft: "-600px", lineHeight: "15px"}}
            >
              <h1 className="text-center">TIME TO STRETCH</h1>
              <p>Breathe in for 5 seconds and out for 7 - continue to do this</p>
              <p>Stretch your arms above you head and draw circles with your hands</p>
              <p>If you have a soft mat, get into child's pose and stay until the position feels comfortable</p>
              <p>Stand up and gently move your hands towards your toes</p>
              <p>Continuing to breathe deeply, gently shake out all your muscles starting with your legs</p>
              <button 
              className="button"
              style={{marginLeft: "40%"}}
              // onClick={() => sendItem = ""}
              onClick={() => (sendItem = "")}
              >
                Continue
                </button>
            </div>)
            }
        </div>
    )
}