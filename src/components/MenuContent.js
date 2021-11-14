import React from "react";
import "../styles/Header.css";

export default function MenuContent(props) {
 
  return (
    <div className="menuContent text-center">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-1"></div>
        <div className="col-md-1">Hours Worked:</div>
        <div className="col-md-1">Exercised Body:</div>
        <div className="col-md-1">Exercised Brain:</div>
        <div className="col-md-1">Stretched:</div>
        <div className="col-md-1">Money Spent:</div>
        <div className="col-md-1">Meals:</div>
        <div className="col-md-1">Coffees:</div>
        <div className="col-md-1">Cups of Water:</div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-1"></div>
        <div className="col-md-1">{props.workHours}</div>
        <div className="col-md-1">{props.exercised? "Yes" : "No"}</div>
        <div className="col-md-1">{props.mental? "Yes" : "No"}</div>
        <div className="col-md-1">{props.stretched? "Yes" : "No"}</div>
        <div className="col-md-1">{props.moneySpent}</div>
        <div className="col-md-1">{props.mealsEaten}</div>
        <div className="col-md-1">{props.coffees}</div>
        <div className="col-md-1">{props.waterCups}</div>
      </div>
    </div>
  );
}
