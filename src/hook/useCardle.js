import { useState } from 'react'

const useCardle = (solution) => {
    // states
    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('') // formatting the guess as a string that corresponds to the car name to search the json database
                                                         // will be updated every time the user presses a key (for the autofill)
    const [guesses, setGuesses] = useState([]) // an array of the actual car objects
    const [history, setHistory] = useState([]) // an array of id numbers
    const [isCorrect, setIsCorrect] = useState(false) 


    // format a guess into a car object
    const formatGuess = () => {
        //console.log('formatting guess - ', currentGuess)
    }

    // add a new guess into the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {
        // if (currentGuess === solution) {
        //     setIsCorrect(true)
        // }
        // setGuesses(prevGuesses => {
        //     let newGuesses = [...prevGuesses]
        //     newGuesses[turn] = formattedGuess
        //     return newGuesses
        // })
        // setHistory(prevHistory => {
        //     return [...prevHistory, currentGuess]
        // })
        // setTurn(prevTurn => {
        //     return prevTurn + 1
        // })
        // setCurrentGuess('')
    }

    // track current guess
    // if user presses enter, add new guess
    const handleKeyup = ({ key }) => {
        console.log('key pressed - ', key)

        // check if key pressed is a char or int and add to guess
        if (/^[A-Za-z0-9]$/.test(key)) {
            setCurrentGuess((prev) => {
                return prev + key
            })
        }
        
        // // check for guess submission
        // if (key === 'Enter') {
        //     // only add if turn is less than 7\
        //     if (turn > 7) {
        //         console.log('You used all your guesses!') // for debug purposes
        //         return
        //     }
        //     // no duplicates
        //     if (history.includes(currentGuess)) {
        //         console.log('You already guessed this!') // for debug purposes
        //     }
        //     // car must exist in database (TODO)
        //     formatGuess()
        // }

        // // check for turns left
        // if (turn > 7) {
        //     console.log('you used all of your guesses!')
        //     return
        // }
        // // no duplicates
        // if (history.includes(currentGuess)) {
        //     console.log('you already tried that car.')
        //     return
        // }
        
        // if (key === 'Backspace') {
        //     setCurrentGuess(prev => prev.slice(0, -1))
        //     return
        // }
    }


    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
    
}

export default useCardle