// import { Component } from 'react'
import { connect } from 'react-redux'
import { toggleSound } from '../actions'
import { AUDIO_CONTEXT } from '../actions'
import Oscillator from '../components/Oscillator'

const mapStateToProps = (state, ownProps) => {
	return {}
}

const mapDispatchToProps = (dispatch, ownProps, state) => {
	let oscillator;
	let gainNode;

	return {
		onStart: id => {
			AUDIO_CONTEXT.resume();
			if (oscillator) oscillator.stop();
			oscillator = AUDIO_CONTEXT.createOscillator();
			gainNode = AUDIO_CONTEXT.createGain();
			oscillator.connect(gainNode);
			gainNode.connect(AUDIO_CONTEXT.destination);
			oscillator.frequency.setValueAtTime(
				ownProps.frequency,
				AUDIO_CONTEXT.currentTime
			);
			oscillator.connect(AUDIO_CONTEXT.destination);
			oscillator.start();
			dispatch(toggleSound(true))
		},

		onStop: id => {
			if (oscillator) oscillator.stop();
			dispatch(toggleSound(false))
		}
	}
}

const OscillatorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Oscillator)

export default OscillatorContainer
