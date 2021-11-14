import React from "react";
import "../styles/Intro.css"
import logoPic from "../images/logo.png"

export default function Intro(props) {
  return (
    <main>
    <div className="myContainer text-center ">
   
      <div>
        <img src={logoPic}
        style={{height:"300px"}}
        />
      </div>
      <div className="text-left">
        <br />
        <p>You can see your total progress for the day at the top</p>
        <p>
          Your statistics and options menu can be accessed through the menu to
          its left
        </p>
        <p>
          You can interact with everything in the office
        </p>
        <p>
          You can click on the computer to begin work or the yoga mat to be guided through stretches
        </p>
        <p>
            How many hours of work would you like to do today?
        </p>
        <form>
            <input
                type="number"
                placeholder="0"
                onChange={props.handleChange}
            />
            <button onClick={props.handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
    </main>
  );
}