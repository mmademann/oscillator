import React from 'react'
import { withHandlers } from 'recompose'

const Waveform = withHandlers({

	updateWaveform: ({ id, updateWaveform }) => event => {
		const wave = event.target.value

		updateWaveform(wave, id)
	}

})(({ waveform, updateWaveform }) => {

	const styleProp = (val) => {
		return (waveform === val) ? '#f2f2f2' : '#ffffff'
	}

	return (
	    <div className="control-row">
			Waveform
			<button
				style={{ backgroundColor: styleProp('sine') }}
				value="sine"
				onClick={updateWaveform}>
				Sine
			</button>
			<button
				style={{ backgroundColor: styleProp('sawtooth') }}
				value="sawtooth"
				onClick={updateWaveform}>
				Saw
			</button>
			<button
				style={{ backgroundColor: styleProp('triangle') }}
				value="triangle"
				onClick={updateWaveform}>
				Tri
			</button>
			<button
				style={{ backgroundColor: styleProp('square') }}
				value="square"
				onClick={updateWaveform}>
				Square
			</button>
		</div>
	)
})

export default Waveform
