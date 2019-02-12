import {ADD_GUESS, addGuess, SET_TARGET, setTarget, CLEAR_GUESSES, clearGuesses} from './index'

describe('addGuess', () => {
    it('Should return the action', () => {
        const guess = 15
        const action = addGuess(15)
        expect(action.type).toEqual(ADD_GUESS)
        expect(action.guess).toEqual(guess)
    })
})

describe('setTarget', () => {
    it('Should return the action', () => {
        const action = setTarget()
        expect(action.type).toEqual(SET_TARGET)
    })
})

describe('clearGuesses', () => {
    it('Should return the action', () => {
        const action = clearGuesses()
        expect(action.type).toEqual(CLEAR_GUESSES)
    })
})