import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Office from "./components/Office";

import "./styles/App.css"

//need to make a stats pannel with:

// Coffees
// water Cups
// money spent




export default function App () {
    
    //total progress today
    let [keepingTrack, setKeepingTrack] = React.useState({
        inPlay: "start", // intro, start, specific
        triggeredObject: "",
        desiredWorkHours: 0,
        workHours: 0,
        coffees: 0,
        waterCups: 0,
        stretched: false,
        moneySpent: 0,
        mental: false,
        exercised: false,
        mealsEaten: 0
    })

    function setupDesiredHours (e) {
      e.preventDefault();
        setKeepingTrack( prevState => {
            return ({...prevState, desiredWorkHours: e.target.value})
        })
    }

    function doSetup () {
        setKeepingTrack ( prevState => {
            return ({...prevState, inPlay : "main"})
        })
    }

    
    function getItem(item) {
      if (item === "worked") {
        setKeepingTrack((prevState) => {
        //   return { ...prevState, workHours: prevState.workHours + 0.5 };
          return { ...prevState, workHours: 0.5 };
        });
      } else {
        setKeepingTrack((prevState) => {
          //the yes or no answers
          switch (item) {
            case "trainers":
              setKeepingTrack((prevState) => {
                return { ...prevState, exercised: true };
              })
              break;
            case "shelf":
              break;
            case "yogaMat":
              setKeepingTrack((prevState) => {
                return { ...prevState, stretched: true };
              })
              break;
            case "coffee":
              setKeepingTrack((prevState) => {
                return { ...prevState, coffees: prevState.coffees + 1 };
              })
            break;
          }
          return { ...prevState, triggeredObject: item };
        });
      }
    }
    


    return (
        <div className="appBackground">

            <Header 
            {...keepingTrack}
            desiredHours={keepingTrack.desiredWorkHours}
            workHours ={keepingTrack.workHours}
            inPlay = {keepingTrack.inPlay}
            
            />
           
            {keepingTrack.inPlay === "start" && (
            <Intro  
            handleChange={setupDesiredHours}
            handleSubmit={doSetup}
             />
             )}

             {/* this div will only show up if we are in the main part (i.e not the start) */}
            {keepingTrack.inPlay === "main" && (
            <Office 
            {...keepingTrack}
            // handleClick={doSetupSpecific}
            handleItemClick = {getItem}
            />
            )}
            
            
         
            
        </div>
    )
}