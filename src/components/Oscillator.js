import React from 'react'
import Playback from './Playback'
import Waveform from './Waveform'
import Frequency from './Frequency'

const Oscillator = ({ id, playback, waveform, frequency, tune, gain, startPlayback, stopPlayback, updateWaveform, updateFrequency, updateTune, updateGain }) => {
	return (
		<div className="oscillator-row">
			<Playback
				key={ `play_${id}` }
				playback={ playback }
				startPlayback={ startPlayback }
				stopPlayback={ stopPlayback }
			/>
			<Waveform
				key={ `wave_${id}` }
				waveform={ waveform }
				updateWaveform={ updateWaveform }
			/>
			<Frequency
				key={ `freq_${id}` }
				frequency={ frequency }
				updateFrequency={ updateFrequency }
				updateTune={ updateTune }
				updateGain={ updateGain }
			/>
		</div>
	)
}

export default Oscillator
