import React from "react";
import radioPic from "../images/radio.png"
import "../styles/Office.css"

export default function Radio (props) {
    let [layout, setLayout] = React.useState("")

    function sayMessage() {
      setLayout(() => {
          if (layout) {
              return "";
          }
        return (
          <div className="message" style={{marginTop: "60px", marginLeft: "-180px"}}>
            <h1>JAM TO YOUR FAVORITE TUNES</h1>
            <p>Go to Spotify and play your well-developed playlist </p>
          </div>
        );
      });
    }

    return (
        <div className="radio interact" onClick={sayMessage}
        style={
          props.triggeredObject === ""
            ? { display: "block" }
            : { display: "none" }
        }
        >
            <img src={radioPic} 
            style={{height:"80px"}}
            alt="radio"></img>
            {layout}
        </div>
    )
}
