import React from 'react'
import {shallow, mount} from 'enzyme'

import {GuessInput} from './guess-input'
import {addGuess} from '../actions'

describe('<GuessInput/>', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn()
        shallow(<GuessInput dispatch={dispatch}/>)
    })
    it('should fire onSubmit when the form is submitted', () => {
        const callback = jest.fn()
        const wrapper = mount(<GuessInput onSubmit={callback}/>)
        const value = 15
        wrapper.update()
        wrapper.find('input').instance().value = value
        wrapper.simulate('submit')
        expect(callback).toHaveBeenCalledWith(value)
    })
})