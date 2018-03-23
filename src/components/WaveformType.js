import React from 'react'
import { Map } from 'immutable'
import { withHandlers } from 'recompose'

const WaveformType = withHandlers({

	updateWaveformType: ({ oscId, updateOscillator }) => event => {
		updateOscillator(Map({
			id: oscId,
			waveformType: event.target.value
		}))
	}

})(({
	waveformType,
	updateWaveformType
}) => {

	const activeBg = (val) => {
		return (waveformType === val) ? '#ffffff' : '#f1f1f1'
	}

	return (
	    <div className="control-row waveform">
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
