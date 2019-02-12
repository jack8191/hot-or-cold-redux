import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../actions'

export class GuessInput extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        
        const value = this.input.value
        this.props.disptach(actions.addGuess(value))
        this.input.value = ''
        this.input.focus()
    }
    //input = React.createRef();


    render() {
        return(
        <form onSubmit={e => this.onSubmit(e)}>
            <input 
                type="number"
                name="userGuess"
                id="userGuess"
                //className="text"
                min="1"
                max="100"
                autoComplete="off"
                ref={input => (this.input = input)} 
                required
                //value={event.target.value}
                />
            <button
                type="submit"
                name="submit"
                id="guessButton"
                className="button">
                Guess
                </button>

        </form>
        )}
}

GuessInput.defaultProps = {
    guesses: []
}

const mapStateToProps = state => ({
    guesses: state.guesses
});

export default connect(mapStateToProps, actions)(GuessInput)