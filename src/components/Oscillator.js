import React from 'react'

import WaveformType from './WaveformType'
import Frequency from './Frequency'
import Keyboard from './Keyboard'
import Envelope from './Envelope'
import WaveShape from './WaveShape'

import { makeDistortionCurve } from '../tools'
import { AUDIO_CONTEXT } from '../constants/audio'
import ADSREnvelope from "adsr-envelope";

class Oscillator extends React.Component {

    started = false
    startTime = 0

    componentDidMount() {
        this.createOscillator()
    }

    componentDidUpdate() {
        this.setOscillatorPlayback()
        this.setOscillatorProps()
    }

    componentWillUnmount() {
        this.oscillatorNode.stop()
    }

    createOscillator() {
        // // resume audio context
        AUDIO_CONTEXT.resume()

        // create the oscillator (audio source)
        this.oscillatorNode = AUDIO_CONTEXT.createOscillator()

        // create distortion node
        this.waveShapeNode = AUDIO_CONTEXT.createWaveShaper()

        // create gain node
        this.gainNode = AUDIO_CONTEXT.createGain()

        //connect oscillator to gain
        this.oscillatorNode.connect(this.gainNode)

        // connect source to wave shaper
        this.oscillatorNode.connect(this.waveShapeNode)

        // connect wave shaper to gain
        this.waveShapeNode.connect(this.gainNode)

        // connect gain to audio destination
        this.gainNode.connect(AUDIO_CONTEXT.destination)
    }

    setOscillatorProps() {
        this.setOscillatorFreq()
        this.setOscillatorDetune()
        this.setOscillatorType()
        // this.setGainValue()
        this.setEnvelopeValues()
        this.setWaveShapeCurve()
    }

    setOscillatorPlayback() {
        const isPlaying = this.props.oscillator.get('playback')

        if (!this.started && isPlaying)
            this.playOscillator()

        else if (this.started && !isPlaying)
            this.stopOscillator()
    }

    playOscillator(playbackTime = AUDIO_CONTEXT.currentTime) {
        this.createOscillator()
        this.setOscillatorProps()
        this.startTime = playbackTime
        this.oscillatorNode.start(playbackTime)
        this.started = true
    }

    stopOscillator(playbackTime = AUDIO_CONTEXT.currentTime) {
        this.gainNode.gain.cancelScheduledValues(this.startTime)
        this.envelope.gateTime = playbackTime - this.startTime
        this.envelope.applyTo(this.gainNode.gain, this.startTime)
        this.oscillatorNode.stop(this.startTime + this.envelope.duration)
        this.started = false
    }

    setOscillatorFreq() {
        this.oscillatorNode.frequency.setValueAtTime(
            this.props.oscillator.get('frequency'),
            AUDIO_CONTEXT.currentTime
        )
    }

    setOscillatorDetune() {
        this.oscillatorNode.detune.setValueAtTime(
            this.props.oscillator.get('detune'),
            AUDIO_CONTEXT.currentTime
        )
    }

    setOscillatorType() {
        this.oscillatorNode.type = this.props.oscillator.get('waveformType')
    }

    setWaveShapeCurve() {
        const { status, amount } = this.props.oscillator.get('waveShape').toJS()
        this.waveShapeNode.curve = (status === 'disabled')
            ? new Float32Array(2)
            : makeDistortionCurve(amount)
    }

    setEnvelopeValues() {
        this.envelope = new ADSREnvelope(
            this.props.oscillator.get('envelope').toJS()
        )
        this.envelope.gateTime = Infinity
        this.envelope.applyTo(this.gainNode.gain, this.startTime)
    }

    setGainValue() {
        this.gainNode.gain.setValueAtTime(
            this.props.oscillator.get('gain') / 100,
            AUDIO_CONTEXT.currentTime
        )
    }

    render () {
        const {
            oscId,
            oscillator,
            updateOscillator,
            updateOscillatorDeep,
        } = this.props

        return (
            <div className="oscillator-row">
                <WaveformType
                    key={ `wave_${oscId}` }
                    oscId={ oscId }
                    waveformType={ oscillator.get('waveformType') }
                    waveShape={ oscillator.get('waveShape') }
                    updateOscillator={ updateOscillator }
                />
                <Keyboard
                    key={ `keyboard_${oscId}` }
                    oscId={ oscId }
                    updateOscillator={ updateOscillator }
                />
                <WaveShape
                    key={ `shape_${oscId}` }
                    oscId={ oscId }
                    waveShape={ oscillator.get('waveShape') }
                    updateOscillatorDeep={ updateOscillatorDeep }
                />
                <Envelope
                    key={ `adsr_${oscId}` }
                    oscId={ oscId }
                    envelope={ oscillator.get('envelope') }
                    updateOscillatorDeep={ updateOscillatorDeep }
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
