import React from "react";
import personPic from "../images/person.png"
import "../styles/Office.css"

export default function Person (props) {

    return(
        <div
        style={
            props.triggeredObject === ""
              ? { display: "block" }
              : { display: "none" }
          }
        className="person">
            <img alt="person"
             src={personPic}
             style={{height:"100px"}}/>
        </div>
    )
}