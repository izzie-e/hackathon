import React from "react";
import MenuContent from "./MenuContent";
import "../styles/Header.css";

import ProgressBar from "./ProgressBar";

export default function Header(props) {

  let [menu, setMenu] = React.useState("");

  function showMenu() {
    setMenu( (menu) => {
      if (menu) {
        return "";
      } else {
        return (
          <MenuContent 
          {...props}
          />
        )
      }
    })

  }
  return (
    <div className="appHeader border-secondary">
      <div className="row">
        <div className="col-md-1" align="center">
          <svg onClick={showMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list-ul"
            viewBox="0 0 13 13"
          >
            <path
              fillRule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        </div>

        {props.inPlay === "start" && (
          <div className="col-md-11" align="center">
            <ProgressBar />
          </div>
        )}
        {props.inPlay !== "start" && (
          <div className="col-md-11" align="center">
            <ProgressBar 
            desiredHours = {props.desiredHours}
            workHours = {props.workHours}
            />
          </div>
        )}
        
      </div>
      {menu}
    </div>
  );
}
