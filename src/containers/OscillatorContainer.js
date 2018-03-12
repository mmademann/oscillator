import { connect } from 'react-redux'

import { makeGetOscillatorById } from '../selectors/oscillators'

import Oscillator from '../components/Oscillator'

const makeMapStateToProps = (initialState, { oscId }) => {

	const getOscillator = makeGetOscillatorById(oscId);

	return (state) => ({
		oscillator: getOscillator(state),
	});
}

const OscillatorContainer = connect(
	makeMapStateToProps
)(Oscillator)

export default OscillatorContainer
