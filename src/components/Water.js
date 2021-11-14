import React from "react";
import waterPic from "../images/water.png"
import "../styles/Office.css"

export default function Water (props) {
    return (
        <div className="water interact"
        style={
            props.triggeredObject === ""
              ? { display: "block" }
              : { display: "none" }
          }
        >
            <img src={waterPic}
            style={{height:"100px"}}
             alt="water jug"></img>
        </div>
    )
}