import React from "react";
import "../styles/Office.css"

export default function Desk (props) {
    return (
        <div className="desk"
        style={
            props.triggeredObject === "" || props.triggeredObject ==="computer"
              ? { display: "block" }
              : { display: "none" }
          }
        >
            
        </div>
    )
}