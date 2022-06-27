import React, { useEffect } from 'react'
import useCardle from '../hook/useCardle'

export default function Cardle({ solution }) {
    const { currentGuess, handleKeyup } = useCardle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])
    return (
        <div>Current Guess - {currentGuess}</div>
    )
}