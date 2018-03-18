import React from 'react'
import { withHandlers } from 'recompose'

const Keyboard = withHandlers({

	selectKey: ({ oscId, updateOscillator }) => event => {
		updateOscillator({
			key: 'frequency',
			value: event.target.value
		}, oscId)
	}

})(({ selectKey }) => {

	return (
	    <ul className="keys">
		    <li onClick={ selectKey } value="174.6" className="white f  w1"></li>
		    <li onClick={ selectKey } value="185.0" className="black fs b1"></li>
		    <li onClick={ selectKey } value="196.0" className="white g  w2"></li>
		    <li onClick={ selectKey } value="207.7" className="black gs b2"></li>
		    <li onClick={ selectKey } value="220.0" className="white a  w3"></li>
		    <li onClick={ selectKey } value="233.1" className="black as b3"></li>
		    <li onClick={ selectKey } value="246.9" className="white b  w4"></li>
		    <li onClick={ selectKey } value="261.6" className="white c  w5"></li>
		    <li onClick={ selectKey } value="277.2" className="black cs b4"></li>
		    <li onClick={ selectKey } value="293.7" className="white d  w6"></li>
		    <li onClick={ selectKey } value="311.1" className="black ds b5"></li>
		    <li onClick={ selectKey } value="329.6" className="white e  w7"></li>
	    </ul>
	)
})

export default Keyboard
