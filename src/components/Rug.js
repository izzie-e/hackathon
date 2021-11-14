import React from "react";
import rugPic from "../images/rug.png"

import "../styles/Office.css"

export default function Rug (props) {
    return (
        <div className="rug interact" alt="rug"
        style={
            props.triggeredObject === ""
              ? { display: "block" }
              : { display: "none" }
          }
        >
        <img src={rugPic} 
        alt="picture of a rug"
        style={{height:"300px", width:"300px"}}
        />


        </div>
    )
}