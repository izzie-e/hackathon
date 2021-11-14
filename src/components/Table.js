import React from "react";

import "../styles/Office.css"

export default function Table (props) {
    return (
        <div className="table"
        style={
            props.triggeredObject === "" || props.triggeredObject === "coffee"
              ? { display: "block" }
              : { display: "none" }
          }>
         
        </div>
    )
}