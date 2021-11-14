import React from "react";
import deskChairPic from "../images/chair.png"
import deskChairPic1 from "../images/chair1.png"

import "../styles/Office.css"

export default function DeskChair(props) {
  let [layout, setLayout] = React.useState("");
  let [chair, setChair] = React.useState(deskChairPic)


  function refuse (e) {
    e.stopPropagation()
    setLayout( () => (""))
  }

  function accept (e) {
    e.stopPropagation()
    setLayout( () => (""))
    setChair( () => deskChairPic1)
  }

  function updateFurniture () {
    setLayout( () => (
      <div className="message">
        <h1>GETTING AN UPGRADE</h1>
        <p>Would you like to upgrade this chair?</p>
        <p>For each day that you meet your goals, you can select one object to upgrade</p>
        <button className="button doubleButton" onClick={refuse}>No</button>
        <button className="button doubleButton" onClick={accept}>Yes</button>
      </div>
    )
    )
  }
  return (
    <div
      className="chair interact"
      onClick={updateFurniture}
      style={
        props.triggeredObject === "" || props.triggeredObject === "chair" || props.triggeredObject === "computer"
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <img
        src={chair}
        style={{ width: "90px"}}
        alt="chair"
      />
      {layout}
    </div>
  );
}