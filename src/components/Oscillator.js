import React from 'react'

// import PlaybackContainer from '../containers/PlaybackContainer'
import WaveformTypeContainer from '../containers/WaveformTypeContainer'
import FrequencyContainer from '../containers/FrequencyContainer'
import KeyboardContainer from '../containers/KeyboardContainer'
import EnvelopeContainer from '../containers/EnvelopeContainer'

import { AUDIO_CONTEXT } from '../actions'
import ADSREnvelope from "adsr-envelope";

class Oscillator extends React.Component {

	started = false;
	startTime = 0;

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
		this.setEnvelopeValues()
	}

	setOscillatorPlayback(playbackTime = AUDIO_CONTEXT.currentTime) {
		const playback = this.props.oscillator.get('playback')
		if (!this.started && playback) {
			this.createOscillator()
			this.startTime = playbackTime
			this.setOscillatorProps()
			this.oscillatorNode.start(playbackTime)
			this.started = true
		} else if (this.started && !playback) {
			// stop the oscillator after the envelope finishes
			this.gainNode.gain.cancelScheduledValues(this.startTime)
			this.envelope.gateTime = playbackTime - this.startTime
			this.envelope.applyTo(this.gainNode.gain, this.startTime)
			this.oscillatorNode.stop(this.startTime + this.envelope.duration)
			this.started = false
		}
	}

	setOscillatorFreq() {
		// set the frequency from state
		this.oscillatorNode.frequency.setValueAtTime(
			this.props.oscillator.get('frequency'),
			AUDIO_CONTEXT.currentTime
		)
	}

	setOscillatorDetune() {
		// set detune value from state
		this.oscillatorNode.detune.setValueAtTime(
			this.props.oscillator.get('detune'),
			AUDIO_CONTEXT.currentTime
		)
	}

	setOscillatorType() {
		// set the waveform type from state
		this.oscillatorNode.type = this.props.oscillator.get('waveformType')
	}

	setGainValue() {
		// set the gain value from state
		this.gainNode.gain.setValueAtTime(
			(parseInt(this.props.oscillator.get('gain'), 10) / 100),
			AUDIO_CONTEXT.currentTime
		)
	}

	setEnvelopeValues() {
		const { oscillator } = this.props
		this.envelope = new ADSREnvelope({
			attackTime: 	oscillator.get('attackTime'),
			decayTime: 		oscillator.get('decayTime'),
			sustainTime: 	oscillator.get('sustainTime'),
			releaseTime: 	oscillator.get('releaseTime')
		})
		// TODO: use a dedicated envelope {} hash in state
		// TODO: clone ADSREnvelope if it already exists
		// this.envelope = new ADSREnvelope( this.props.oscillator.get('envelope') )
		this.envelope.gateTime = Infinity
		this.envelope.applyTo(this.gainNode.gain, this.startTime)
	}

	render () {
		const { oscId, oscillator } = this.props
		return (
			<div className="oscillator-row">
				<WaveformTypeContainer
					key={ `wave_${oscId}` }
					oscId={ oscId }
					waveformType={ oscillator.get('waveformType') }
				/>
				<KeyboardContainer
					key={ `keyboard_${oscId}` }
					oscId={ oscId }
				/>
				<EnvelopeContainer
					key={ `adsr_${oscId}` }
					oscId={ oscId }
					attackTime={ oscillator.get('attackTime') }
					decayTime={ oscillator.get('decayTime') }
					sustainTime={ oscillator.get('sustainTime') }
					releaseTime={ oscillator.get('releaseTime') }
					// envelope={ oscillator.get('envelope') }
				/>
				<FrequencyContainer
					key={ `freq_${oscId}` }
					oscId={ oscId }
					frequency={ oscillator.get('frequency') }
					gain={ oscillator.get('gain') }
					detune={ oscillator.get('detune') }
				/>
			</div>
		)
	}
}

export default Oscillator
