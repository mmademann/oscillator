import { connect } from 'react-redux'

import { makeGetOscillatorById } from '../selectors/oscillators'
import { updateOscillator, updateEnvelope } from '../actions'

import Oscillator from '../components/Oscillator'

// if the mapStateToProps argument supplied to connect
// returns a function instead of an object, it will be
// used to create an individual mapStateToProps function
// for each instance of the container.
const makeMapStateToProps = (initialState, { oscId }) => {

	const getOscillator = makeGetOscillatorById(oscId);

	const mapStateToProps = (state) => ({
		oscillator: getOscillator(state)
	})

	// return the function, not an object. each instance
	// needs a unique oscId and needs to be memoized
	return mapStateToProps
}

export default connect(
	makeMapStateToProps,
	{ updateOscillator, updateEnvelope }
)(Oscillator)
