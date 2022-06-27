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
        console.log('key pressed - ', key)

        // check for turns left
        if (turn > 5) {
            console.log('you used all of your guesses!')
            return
        }
        // no duplicates
        if (history.includes(currentGuess)) {
            console.log('you already tried that car.')
            return
        }
        
        if (key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1))
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            // TODO
        }
    }


    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
    
}

export default useCardle