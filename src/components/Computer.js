import React from "react";
import Countdown from "./Countdown";
import computerPic from "../images/computer.png"

import "../styles/Office.css"

export default function Computer (props) {
    let setup;
    let miliseconds = 6000;

    if (props.triggeredObject == "computer") {
        let timer = setTimeout( ()=> {
            props.handleItemClick("worked");
            props.handleItemClick("");
           clearTimeout(timer) 
        }, miliseconds)
        
        setup = (
            <div className="message" style={{marginLeft: "200px"}}>
                <p>Get to Work: </p>
                <p>You only have 30 minutes!</p>
                {Countdown()}
            </div>
        )
    }

    return (
        <div className="computer interact"
         onClick={event => props.handleItemClick(event.target.id)}
         style={
            props.triggeredObject === "" || props.triggeredObject === "computer"
              ? { display: "block" }
              : { display: "none" }
          }
         >
            <img id ="computer" 
            src={computerPic} 
            style={{ height: "40px" }}
            alt="computer"></img>
            {setup}
    
        </div>
    )
}