import React from 'react'
import { withHandlers } from 'recompose'

const Keyboard = withHandlers({

	pianoKeyDown: ({ oscId, updateOscillator }) => event => {
		// TODO: how to dispatch multiple actions?
		updateOscillator({
			key: 'frequency',
			value: event.target.value
		}, oscId)
		updateOscillator({
			key: 'playback',
			value: true
		}, oscId)
	},

	pianoKeyUp: ({ oscId, updateOscillator }) => event => {
		updateOscillator({
			key: 'playback',
			value: false
		}, oscId)
	}

})(({
	pianoKeyDown,
	pianoKeyUp
}) => {
	return (
	    <ul className="keys">
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="174.6"
		    	className="white f w1">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="185.0"
		    	className="black fs b1">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="196.0"
		    	className="white g w2">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="207.7"
		    	className="black gs b2">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="220.0"
		    	className="white a w3">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="233.1"
		    	className="black as b3">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="246.9"
		    	className="white b w4">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="261.6"
		    	className="white c w5">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="277.2"
		    	className="black cs b4">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="293.7"
		    	className="white d w6">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="311.1"
		    	className="black ds b5">
		    </li>
		    <li
		    	onMouseDown={ pianoKeyDown }
		    	onMouseUp={ pianoKeyUp }
		    	value="329.6"
		    	className="white e w7">
		    </li>
	    </ul>
	)
})

export default Keyboard
