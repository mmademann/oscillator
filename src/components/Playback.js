import React from 'react'

import { withHandlers } from 'recompose'

//<PlaybackContainer
//	key={ `play_${oscId}` }
//	oscId={ oscId }
//	playback={ oscillator.get('playback') }
///>

const Playback = withHandlers({

	togglePlayback: ({ oscId, updateOscillator }) => event => {
		updateOscillator({
			key: 'playback',
			value: (event.target.value === 'start')
				? true
				: false
		}, oscId)
	}

})(({
	playback,
	togglePlayback
}) => {
	const activeBg = (val) => {
		return (val) ? '#f2f2f2' : '#ffffff'
	}

	return (
	    <div className="control-row">
	        <button
	        	value="start"
	        	style={{ backgroundColor: activeBg(playback) }}
	        	onClick={ togglePlayback }>
	        	Play
	        </button>
	        <button
	        	value="stop"
	        	style={{ backgroundColor: activeBg(!playback) }}
	        	onClick={ togglePlayback }>
	        	Stop
	        </button>
	    </div>
	)
})

export default Playback
