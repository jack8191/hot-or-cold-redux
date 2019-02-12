import React from 'react'
import {connect} from 'react-redux'

export class GuessHistory extends React.Component {
    renderGuessList(array) {
        return array.map((item, index) => 
            <li key={index}>
                {item}
            </li>
        )
    } 

    render() {
        const guessList = this.renderGuessList(this.props.guesses)
            return(
            <ul>
                {guessList}
            </ul>
            )
    }
    
}

const mapStateToProps = state => ({
    guesses: state.guesses,
});

export default connect(mapStateToProps)(GuessHistory)