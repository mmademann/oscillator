import React from 'react'

const Playback = ({ playback, startPlayback, stopPlayback }) => {
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
}

export default Playback
