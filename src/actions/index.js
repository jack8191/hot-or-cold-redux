export const ADD_GUESS = 'ADD_GUEST';
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
})

export const SET_TARGET = 'SET_TARGET'
export const setTarget = target => ({
    type: SET_TARGET,
    target
})

export const CLEAR_GUESSES = 'CLEAR_GUESSES'
export const clearGuesses = guesses => ({
    type: CLEAR_GUESSES,
    guesses
})
