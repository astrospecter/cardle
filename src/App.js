import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cardle</h1>
    </div>
  );
}

export default App;

/*

Data to track:
  -- solution
    -- car make, model, country, name?
  -- past guesses
    -- a chart of past guesses
    -- each past guess is a separate car object composed of objects make, model, country, name
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
      -- make: alphabetical
      -- model: alphabetical
      -- country: distance? or continent
      -- name: alphabetical
    -- guess is added to  grid with correct symbols/colors
    -- current guess moves to the next row
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- message: "well done" or some variant
    -- if user runs out of guesses:
      -- message: "Better luck next time" or some variant

*/
