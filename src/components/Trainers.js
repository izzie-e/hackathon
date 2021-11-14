import React from "react";
import trainerPic from "../images/trainers.png";

import "../styles/Office.css";

export default function Trainers(props) {
  let sendItem = "trainers"; ////
  return (
    <div
      className="trainers interact"
      onClick={() => props.handleItemClick(sendItem)}
      style={
        props.triggeredObject === "" || props.triggeredObject === "trainers"
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <img src={trainerPic} style={{ height: "60px" }} alt="trainers"></img>
      <div>
        {props.triggeredObject === "trainers" && (
          <div
            className="message text-left"
            style={{
              marginTop: "100px",
              marginLeft: "-600px",
              lineHeight: "15px",
            }}
          >
            <h1 className="text-center">TIME TO EXERCISE</h1>
            <p>If you only have a short period of time, try HIT</p>
            <p>If you want to destress, running is always a good option</p>
            <p>Climbing is fun and addictive</p>
            <p>You'll see gains quickly with weightlifting</p>

            <button
              className="button"
              style={{ marginLeft: "40%" }}
              onClick={() => (sendItem = "")}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
