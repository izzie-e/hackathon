import React from "react";
import "../styles/Office.css"

import Trash from "./Trash";
import DeskChair from "./DeskChair";
import Desk from "./Desk";
import Computer from "./Computer";
import Radio from "./Radio";
import Piggy from "./Piggy";
import Window from "./Window";
import Trainers from "./Trainers";
import YogaMat from "./YogaMat";
import Trophy from "./Trophy";
import Plant from "./Plant";
import Bookshelf from "./Bookshelf";
import Table from "./Table";
import Water from "./Water";
import Coffee from "./Coffee";
import Microwave from "./Microwave";
import Rug from "./Rug";
import Person from "./Person";

export default function Office (props) {
  // let {inPlay, triggeredObject, desiredWorkHours, workHours, coffees, waterCups, stretchingEvents, moneySpent, pagesRead, exerciseMinutes, mealsEaten} = props;
  let {triggeredObject} = props;
  return (
      <main>
        <div className="gameContainer">
            <Trash
            triggeredObject = {triggeredObject}
            handleItemClick = {props.handleItemClick}
            />
            <DeskChair
            triggeredObject = {triggeredObject}
            />
            <Computer
            handleItemClick = {props.handleItemClick}
            triggeredObject = {triggeredObject}
            />
            <Radio
            triggeredObject = {triggeredObject}
            />
            <Piggy
            triggeredObject = {triggeredObject}
            />
            <Desk 
            triggeredObject = {triggeredObject}
            />
            <Window
            triggeredObject = {triggeredObject}
            />
            <Trainers
            triggeredObject = {triggeredObject}
            handleItemClick = {props.handleItemClick}
            />
            <YogaMat
            triggeredObject = {triggeredObject}
            handleItemClick = {props.handleItemClick}
            />
            <Trophy
            triggeredObject = {triggeredObject}
            />
            <Plant
            triggeredObject = {triggeredObject}
            />
            <Bookshelf
            triggeredObject = {triggeredObject}
            />
            <Table 
            triggeredObject = {triggeredObject}
            />
            <Coffee 
            triggeredObject = {triggeredObject}
            handleItemClick = {props.handleItemClick}
            />
            <Water 
            triggeredObject = {triggeredObject}
            />
            <Microwave 
            triggeredObject = {triggeredObject}
            />
            <Rug 
            triggeredObject = {triggeredObject}
            />
            <Person 
            triggeredObject = {triggeredObject}/>

        </div>
      </main>
    );
}

