import './App.css';
import React, { Component, useEffect, useState } from "react";

function App() {
  const [solution, setSolution] = useState(null)
  
  // set solution?
  // this will need to be changed when i change it to a daily thing
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
  }, [])
  
  
  return (
    <div className="App">
      <h1>Cardle</h1>
    </div>
  )
}

export default App;

/*

Data to track:
  -- solution
    -- car make, model, country, name?, cylinder number
  -- past guesses
    -- a chart of past guesses
    -- each past guess is a separate car object composed of objects make, model, country, name, cylinder number
    -- each separate object within car contains a "distance" away from the correct answer
  -- current guess
    -- object car
  -- number of turns
    -- an integer from 0-8???


Game Process:
  -- entering a car
    -- user enters a car make/model
      -- each time the user presses a letter or backspace, autofill updates to include next 3 closest guesses
    -- when user presses anything in the autofill it fills the input bar with the car make and model
    -- when user hits enter it submits the car
      -- if the car can't be found in the database the car is not submitted
      -- if the car has been used in a previous guess the car is not submitted
  -- checking submitted cars
    -- each object within the car object is checked for a distance away from the actual
    -- if the object doesn't match the actual the "distance" away from the actual answer is calculated
      -- make: correct or incorrect
      -- model: correct or incorrect
      -- country: distance? or continent
      -- year: greater or less
      -- cylinder: greater or less
    -- guess is added to  grid with correct symbols/colors
    -- current guess moves to the next row
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- message: "well done" or some variant
    -- if user runs out of guesses:
      -- message: "Better luck next time" or some variant

*/
