import React from "react";
import trophyPic from "../images/trophy.png"

import "../styles/Office.css"

export default function Trophy (props) {

    let [layout, setLayout] = React.useState("")
    const slogans = [
        "Will you enjoy the time you procrastinate or will you just feel guilty?",
        "Even one step is better than none",
        "Don't be afraid of failing. You'll have other tries",
        "Ask for help if you're stuck",
    ]

    function sayMessage() {
      setLayout(() => {
          if (layout) {
              return "";
          }
        return (
          <div className="message" style={{marginTop: "-100px", marginLeft: "-550px"}}>
              <h1>KEEP GOING!</h1>
            <p>{slogans[Math.floor(Math.random()*3.99)]}</p>
          </div>
        );
      });
    }

    return (
        <div className="trophy interact" onClick={sayMessage}
        style={
          props.triggeredObject === ""
            ? { display: "block" }
            : { display: "none" }
        }
        >
            <img src={trophyPic} 
            style={{height:"200px"}}
            alt="trophy"></img>
            {layout}
        </div>
    )
}