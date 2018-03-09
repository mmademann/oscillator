import { connect } from 'react-redux'
import { togglePlayback } from '../actions'
import { updateWaveform } from '../actions'
import { updateFrequency } from '../actions'
import { updateTune } from '../actions'
import { updateGain } from '../actions'
import { AUDIO_CONTEXT } from '../actions'
import Oscillator from '../components/Oscillator'

let oscillatorNodes = {};
let gainNodes = {};

const mapStateToProps = (state, props) => {
	const oscillator = state.oscillators[props.id]
	return {
		id: oscillator.id,
		playback: oscillator.playback,
		waveform: oscillator.waveform,
		frequency: oscillator.frequency,
		tune: oscillator.tune,
		gain: oscillator.gain
	}
}

const mapDispatchToProps = (dispatch, { id, frequency, waveform, tune, gain }) => {
	gainNodes[id] = gainNodes[id]
	oscillatorNodes[id] = oscillatorNodes[id]

	return {
		startPlayback: event => {

			// resume audio API
			AUDIO_CONTEXT.resume()

			// gotta stop the oscillator before playing it
			if (oscillatorNodes[id]) oscillatorNodes[id].stop()

			// initialize the gain for volume controll
			gainNodes[id] = AUDIO_CONTEXT.createGain()

			// initialize the oscillator
			oscillatorNodes[id] = AUDIO_CONTEXT.createOscillator()

			//connect oscillator to gain
			oscillatorNodes[id].connect(gainNodes[id])

			// connect gain to audio destination
			gainNodes[id].connect(AUDIO_CONTEXT.destination)

			// connect oscillator to audio destination
			oscillatorNodes[id].connect(AUDIO_CONTEXT.destination)

			// set the frequency from props => from state
			oscillatorNodes[id].frequency.setValueAtTime(
				frequency,
				AUDIO_CONTEXT.currentTime
			)

			// set detune value from props => from state
			oscillatorNodes[id].detune.setValueAtTime(
				tune,
				AUDIO_CONTEXT.currentTime
			)

			// set the waveform from props => from state
			oscillatorNodes[id].type = waveform

			// set the gain from props => from state
			gainNodes[id].gain.setValueAtTime(
				(parseInt(gain, 10) / 100),
				AUDIO_CONTEXT.currentTime
			)

			oscillatorNodes[id].start()
			dispatch(
				togglePlayback(
					true,
					id
				)
			)
		},

		stopPlayback: event => {
			if (oscillatorNodes[id]) oscillatorNodes[id].stop()
			dispatch(
				togglePlayback(
					false,
					id
				)
			)
		},

		updateWaveform: event => {
			const wave = event.target.value
			if (oscillatorNodes[id]) {
				oscillatorNodes[id].type = wave
				dispatch(
					updateWaveform(
						wave, id
					)
				)
			}
		},

		updateFrequency: event => {
			const freq = event.target.value
			if (oscillatorNodes[id]) {
				oscillatorNodes[id].frequency.setValueAtTime(
					Math.pow(2, freq / 100),
					AUDIO_CONTEXT.currentTime
				)
				dispatch(
					updateFrequency(
						freq,
						id
					)
				)
			}
		},

		updateTune: event => {
			const finetune = event.target.value
			if (oscillatorNodes[id]) {
				oscillatorNodes[id].detune.setValueAtTime(
					finetune,
					AUDIO_CONTEXT.currentTime
				)
				dispatch(
					updateTune(
						finetune,
						id
					)
				)
			}
		},

		updateGain: event => {
			const vol = event.target.value
			if (gainNodes[id]) {
				gainNodes[id].gain.setValueAtTime(
					(parseInt(vol, 10) / 100),
					AUDIO_CONTEXT.currentTime
				)
				dispatch(
					updateGain(
						vol,
						id
					)
				)
			}
		}
	}
}

const OscillatorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Oscillator)

export default OscillatorContainer
