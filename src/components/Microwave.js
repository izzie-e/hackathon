import React from "react";
import microwavePic from "../images/microwave.png"

import "../styles/Office.css"

export default function Microwave (props) {
    return (
        <div className="microwave interact"
        style={
            props.triggeredObject === ""
              ? { display: "block" }
              : { display: "none" }
          }>
            <img src={microwavePic}
            style={{height:"100px"}}
            alt="microwave"></img>
        </div>
    )
}