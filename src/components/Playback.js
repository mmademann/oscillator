import React from 'react'
import { withHandlers } from 'recompose'

const Playback = withHandlers({

	startPlayback: ({ oscId, togglePlayback }) => event => {
		const playback = true

		togglePlayback(playback, oscId)
	},

	stopPlayback: ({ oscId, togglePlayback }) => event => {
		const playback = false

		togglePlayback(playback, oscId)
	}

})(({
	playback,
	startPlayback,
	stopPlayback
}) => {

	const styleProp = (val) => {
		return (val) ? '#f2f2f2' : '#ffffff'
	}

	return (
	    <div className="control-row">
	        Oscillator
	        <button
	        	style={{ backgroundColor: styleProp(playback) }}
	        	onClick={ startPlayback }>
	        	Play
	        </button>
	        <button
	        	style={{ backgroundColor: styleProp(!playback) }}
	        	onClick={ stopPlayback }>
	        	Stop
	        </button>
	    </div>
	)
})

export default Playback
