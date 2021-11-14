import React from "react";
import plantPic from "../images/plant.png"

import "../styles/Office.css"

export default function Plant (props) {

    let [layout, setLayout] = React.useState("")

    function sayMessage() {
      setLayout(() => {
          if (layout) {
              return "";
          }
        return (
          <div className="message" style={{marginTop: "-300px", marginLeft: "-550px"}}>
              <h1>YOU WATERED THE PLANTS!</h1>
            <p>Have you watered your own plants today?</p>
          </div>
        );
      });
    }

    return (
        <div className="plant interact" onClick={sayMessage}
        style={
          props.triggeredObject === ""
            ? { display: "block" }
            : { display: "none" }
        }
        >
            <img src={plantPic} 
            style={{height:"150px"}}
            alt="potted plant"></img>
            {layout}
        </div>
    )
}