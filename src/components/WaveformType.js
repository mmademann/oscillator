import React from 'react'
import { withHandlers } from 'recompose'

const WaveformType = withHandlers({

	updateWaveformType: ({ oscId, updateOscillator }) => event => {
		updateOscillator({
			key: 'waveformType',
			value: event.target.value
		}, oscId)
	}

})(({ waveformType, updateWaveformType }) => {

	const activeBg = (val) => {
		return (waveformType === val) ? '#f2f2f2' : '#ffffff'
	}

	return (
	    <div className="control-row">
			Waveform
			<button
				style={{ backgroundColor: activeBg('sine') }}
				value="sine"
				onClick={updateWaveformType}>
				Sine
			</button>
			<button
				style={{ backgroundColor: activeBg('sawtooth') }}
				value="sawtooth"
				onClick={updateWaveformType}>
				Saw
			</button>
			<button
				style={{ backgroundColor: activeBg('triangle') }}
				value="triangle"
				onClick={updateWaveformType}>
				Tri
			</button>
			<button
				style={{ backgroundColor: activeBg('square') }}
				value="square"
				onClick={updateWaveformType}>
				Square
			</button>
		</div>
	)
})

export default WaveformType
