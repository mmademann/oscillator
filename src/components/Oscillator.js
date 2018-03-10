import React from 'react'

import PlaybackContainer from '../containers/PlaybackContainer'
import WaveformContainer from '../containers/WaveformContainer'
import FrequencyContainer from '../containers/FrequencyContainer'

import { AUDIO_CONTEXT } from '../actions'

class Oscillator extends React.Component {

	started = false;

	componentDidMount() {
		this.createOscillator()
		this.setOscillatorProps()
		this.setOscillatorPlayback()
	}

	componentDidUpdate() {
		this.setOscillatorProps()
		this.setOscillatorPlayback()
	}

	componentWillUnmount() {
		this.oscillatorNode.stop()
	}

	createOscillator() {

		// // resume audio API
		AUDIO_CONTEXT.resume()

		// initialize the gain for volume controll
		this.gainNode = AUDIO_CONTEXT.createGain()

		// initialize the oscillator
		this.oscillatorNode = AUDIO_CONTEXT.createOscillator()

		//connect oscillator to gain
		this.oscillatorNode.connect(this.gainNode)

		// connect gain to audio destination
		this.gainNode.connect(AUDIO_CONTEXT.destination)

		// connect oscillator to audio destination
		this.oscillatorNode.connect(AUDIO_CONTEXT.destination)
	}

	setOscillatorProps() {
		this.setOscillatorFreq()
		this.setOscillatorDetune()
		this.setOscillatorType()
		this.setGainValue()
	}

	setOscillatorPlayback() {
		const playback = this.props.oscillator.get('playback');

		if (!this.started && playback) {
			this.createOscillator()
			this.setOscillatorProps()
			this.oscillatorNode.start()
			this.started = true
		} else if (this.started && !playback) {
			this.oscillatorNode.stop();
			this.started = false
		}
	}

	setOscillatorFreq() {
		// set the frequency from props => from state
		this.oscillatorNode.frequency.setValueAtTime(
			this.props.oscillator.get('frequency'),
			AUDIO_CONTEXT.currentTime
		)
	}

	setOscillatorDetune() {
		// set detune value from props => from state
		this.oscillatorNode.detune.setValueAtTime(
			this.props.oscillator.get('tune'),
			AUDIO_CONTEXT.currentTime
		)
	}

	setOscillatorType() {
		this.oscillatorNode.type = this.props.oscillator.get('waveform')
	}

	setGainValue() {
		// set the gain from props => from state
		this.gainNode.gain.setValueAtTime(
			(parseInt(this.props.oscillator.get('gain'), 10) / 100),
			AUDIO_CONTEXT.currentTime
		)
	}

	render () {
		const { oscId, oscillator } = this.props;
		return (
			<div className="oscillator-row">
				<PlaybackContainer
					key={ `play_${oscId}` }
					oscId={ oscId }
					playback={ oscillator.get('playback') }
				/>
				<WaveformContainer
					key={ `wave_${oscId}` }
					oscId={ oscId }
					waveform={ oscillator.get('waveform') }
				/>
				<FrequencyContainer
					key={ `freq_${oscId}` }
					oscId={ oscId }
					frequency={ oscillator.get('frequency') }
					gain={ oscillator.get('gain') }
					tune={ oscillator.get('tune') }
				/>
			</div>
		)
	}
}

export default Oscillator
