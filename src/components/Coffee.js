import React from "react";
import coffeePic from "../images/coffee.png"
import "../styles/Office.css"

export default function Coffee (props) {
    let sendItem = "coffee"; //
  
      return (
          <div className="coffee interact" 
          onClick={() => props.handleItemClick(sendItem)}
          style={
            props.triggeredObject === "" || props.triggeredObject === "coffee"
              ? { display: "block" }
              : { display: "none" }
          }>
              <img src={coffeePic} 
              alt="coffee cup"
              style={{height:"40px"}}
              ></img>
              {props.triggeredObject === "coffee" && (
              <div className="message text-left"
              style={{lineHeight: "15px", top:"-400px", transform: "rotate(-20deg)" }}
              >
                <h1 className="text-center">CAFFEINE</h1>
                <p>Use the coffee cup to keep track of how much caffeine you're drinking</p>
                <p>Caffeine is actually great for you but don't go overboard</p>
                <p>Also try to avoid drinking coffee too late in the day</p>
                <button 
                className="button"
                style={{marginLeft: "40%"}}
                onClick={() => (sendItem = "")}
                >
                  Continue
                  </button>
              </div>)
              }
          </div>
      )
  }