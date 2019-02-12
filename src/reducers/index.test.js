import {gameReducer} from './index'
import {addGuess, setTarget, clearGuesses} from '../actions'

describe('gameReducer', () => {
    const guess1 = 15
    const guess2 = 68
    const dummyTarget = 35
    it('Should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, {type: '__UNKNOWN'})
        expect(state.guesses).toEqual([])
        expect(state.target).toBeGreaterThanOrEqual(1)
        expect(state.target).toBeLessThanOrEqual(100)
    })
    it('Should return the current state on an unknown action', () => {
        let currentState = {}
        const state = gameReducer(currentState, {type: '__UNKNOWN'})
        expect(state).toBe(currentState)
    })
    describe('addGuess', () => {
        it('should add new guesses', () => {
            let state
            state = gameReducer(state, addGuess(guess1))
            state = gameReducer(state, addGuess(guess2))
            expect(state.guesses).toEqual([guess1, guess2])
        })
    })
    describe('setTarget', () => {
        it('should set a new target', () => {
            let state
            state = gameReducer(state, setTarget())
            expect(state.target).toBeGreaterThanOrEqual(1)
            expect(state.target).toBeLessThanOrEqual(100)
        })
    })
    describe('clearGuesses', () => {
        it('should empty the guess array', () => {
            let state = {target: 66, guesses: [guess1, guess2]} 
            state = gameReducer(state, clearGuesses())
            expect(state.guesses).toEqual([])
        })
    })
})