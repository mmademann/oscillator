import React from 'react'
import { withHandlers } from 'recompose'

const WaveformType = withHandlers({

	updateWaveformType: ({ oscId, updateWaveformType }) => event => {
		const waveType = event.target.value

		updateWaveformType(waveType, oscId)
	}

})(({ waveformType, updateWaveformType }) => {

	const styleProp = (val) => {
		return (waveformType === val) ? '#f2f2f2' : '#ffffff'
	}

	return (
	    <div className="control-row">
			Waveform
			<button
				style={{ backgroundColor: styleProp('sine') }}
				value="sine"
				onClick={updateWaveformType}>
				Sine
			</button>
			<button
				style={{ backgroundColor: styleProp('sawtooth') }}
				value="sawtooth"
				onClick={updateWaveformType}>
				Saw
			</button>
			<button
				style={{ backgroundColor: styleProp('triangle') }}
				value="triangle"
				onClick={updateWaveformType}>
				Tri
			</button>
			<button
				style={{ backgroundColor: styleProp('square') }}
				value="square"
				onClick={updateWaveformType}>
				Square
			</button>
		</div>
	)
})

export default WaveformType
