import React from "react";
import piggyPic from "../images/piggybank.png"

import "../styles/Office.css"

export default function Piggy (props) {
    return (
        <div className="piggy interact"
        style={
            props.triggeredObject === ""
              ? { display: "block" }
              : { display: "none" }
          }>
            <img src={piggyPic} alt="piggy bank"
            style={{height:"50px"}}
            ></img>
        </div>
    )
}