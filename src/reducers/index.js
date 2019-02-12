import * as actions from '../actions'

const initialState = {
    guesses: [],
    target: Math.floor(Math.random() * 100) + 1
}

export const gameReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_GUESS) {
        return Object.assign({}, state, {
            guesses: [
                ...state.guesses, 
                Number(action.guess)
            ]
        })
    }
    else if (action.type === actions.SET_TARGET) {
        return Object.assign({}, state, {
            target: Math.floor(Math.random() * 100) + 1
        })
    }
    else if (action.type === actions.CLEAR_GUESSES) {
        return {
            ...state,
            guesses: []
        }
    }
    return state
}