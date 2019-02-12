import React from 'react'
import {connect} from 'react-redux'

export class Feedback extends React.Component {
    determineFeedback(value){
        const target = this.props.target
        let feedback = ''
        const lowerBound = target - 10
        const upperBound = target + 10

        if (this.props.guesses.length === 0) {feedback = "Guess a number!"} 
        else if (value === target) {feedback = 'Correct'} 
        else if (value > lowerBound && value < target) {feedback = 'Hot'} 
        else if (value < upperBound && value > target) {feedback = 'Hot'} 
        else {feedback = "Cold"}
        return <p>{feedback}</p>
    }
    //switch statement alternate method
                // console.log(10 + target)
                // console.log(target - 10)
    render () {
        const newGuess = this.props.guesses.slice(-1)
        const intGuess = parseInt(newGuess[0])
        return this.determineFeedback(intGuess)
    }
    
}

Feedback.defaultProps = {
    guesses: '',
    target: Math.floor(Math.random() * 100) + 1
}

const mapStateToProps = state => ({
    guesses: state.guesses,
    target: state.target
})

export default connect(mapStateToProps)(Feedback)