import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../actions'

export class ResetButton extends React.Component {
    onClick(event) {
        event.preventDefault();
        this.props.dispatch(actions.clearGuesses()) 
        // this.props.clearGuesses()
        this.props.dispatch(actions.setTarget())
    }

    render(){
        return (
            <button onClick={e => this.onClick(e)}>
                Click to Play Again!
            </button>
        )
    }
}

const mapStateToProps = state => ({
    guesses: state.guesses,
    target: state.target
});

export default connect(mapStateToProps, actions)(ResetButton)