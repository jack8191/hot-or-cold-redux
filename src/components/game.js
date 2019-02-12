import React from 'react'
import {connect} from 'react-redux'

import GuessHistory from './guess-history'
import Feedback from './feedback'
import GuessInput from './guess-input'
import ResetButton from './reset-button';

export class Game extends React.Component {
    render() {
        const newGuess = this.props.guesses.slice(-1)
        // this is more efficient and conventional const intGuess = this.props.guesses[this.props.guesses.length -1]
        const intGuess = Number(newGuess[0])
        const target = this.props.target

        if (intGuess === target) {
        return (        
            <div className="game">
                <Feedback/>
                <ResetButton/>
            </div>
            )
        }
        else {
            return (
                <div className="game">
                    <Feedback/>
                    <GuessInput/>
                    <GuessHistory/>
                </div>
            )
        }
    }
}



const mapStateToProps = state => ({
    guesses: state.guesses,
    target: state.target
});

export default connect(mapStateToProps)(Game)