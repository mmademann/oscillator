import React from 'react'

const Waveform = ({ waveform, updateWaveform }) => {

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
}

export default Waveform
