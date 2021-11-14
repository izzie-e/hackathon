import React from "react";

import booksPic from "../images/books.png"

import "../styles/Office.css"

export default function Bookshelf (props) {


    let [layout, setLayout] = React.useState("")

    function sayMessage() {
      setLayout(() => {
          if (layout) {
              return "";
          }
        return (
          <div className="message" style={{marginTop: "-350px", marginLeft: "-130px"}}>
            <h1>UNWIND WITH SOME READING</h1>
            <p>Read the next 20 pages of your favorite book... Take notes</p>
          </div>
        );
      });
    }

    return (
        <div className="shelf interact" onClick={sayMessage}
        style={
          props.triggeredObject === ""
            ? { display: "block" }
            : { display: "none" }
        }
        >
            <img src={booksPic} 
            style={{height:"100px", marginTop:"-20px"}}
            alt="bookshelf"></img>
            {layout}
        </div>
    )
}