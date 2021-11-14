import React from "react";

import "../styles/Office.css"

export default function Window (props) {

    let [layout, setLayout] = React.useState("")

    function sayMessage() {
        setLayout(() => {
            if (layout) {
                return "";
            }
          return (
            <div className="message" style={{marginTop: "100px", marginLeft: "-80px"}}>
              <h1>GO OUTSIDE!</h1>
              <p>Touch some grass and feel the sun on your face</p>
            </div>
          );
        });
      }

    return (
        <div className="window interact" onClick={sayMessage}
        style={
          props.triggeredObject === ""
            ? { display: "block" }
            : { display: "none" }
        }
        >
            
            {layout}
        </div>
    )
}