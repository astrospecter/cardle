import { useState } from 'react'

const useCardle = (solution) => {
    // states
    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('') // formatting the guess as a string that corresponds to the car name to search the sql database
                                                         // will be updated every time the user presses a key (for the autofill)
    const [guesses, setGuesses] = useState([]) // an array of the actual car objects
    const [history, setHistory] = useState([]) // an array of id numbers
    const [isCorrect, setIsCorrect] = useState(false) 


    // format a guess into a car object
    const formatGuess = () => {

    }

    // add a new guess into the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    // track current guess
    // if user presses enter, add new guess
    const handleKeyup = () => {

    }
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
    
}

export default useCardle