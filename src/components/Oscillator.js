import React from 'react'

import WaveformType from './WaveformType'
import Frequency from './Frequency'
import Keyboard from './Keyboard'
import Envelope from './Envelope'

import { AUDIO_CONTEXT } from '../constants/audio'
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

        // this.oscillatorNode.connect(AUDIO_CONTEXT.destination)
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
        // setup the envelope & its properties
        this.envelope = new ADSREnvelope(
            this.props.oscillator.get('envelope').toJS()
        )
        this.envelope.gateTime = Infinity
        this.envelope.applyTo(this.gainNode.gain, this.startTime)
    }

    render () {
        const {
            oscId,
            oscillator,
            updateOscillator,
            updateEnvelope
        } = this.props

        return (
            <div className="oscillator-row">
                <WaveformType
                    key={ `wave_${oscId}` }
                    oscId={ oscId }
                    waveformType={ oscillator.get('waveformType') }
                    updateOscillator={ updateOscillator }
                />
                <Keyboard
                    key={ `keyboard_${oscId}` }
                    oscId={ oscId }
                    updateOscillator={ updateOscillator }
                />
                <Envelope
                    key={ `adsr_${oscId}` }
                    oscId={ oscId }
                    envelope={ oscillator.get('envelope') }
                    updateEnvelope={ updateEnvelope }
                />
                <Frequency
                    key={ `freq_${oscId}` }
                    oscId={ oscId }
                    frequency={ oscillator.get('frequency') }
                    gain={ oscillator.get('gain') }
                    detune={ oscillator.get('detune') }
                    updateOscillator={ updateOscillator }
                />
            </div>
        )
    }
}

export default Oscillator
