import { connect } from 'react-redux'

import { makeGetOscillatorById } from '../selectors/oscillators'
import { updateOscillator } from '../actions'

import Oscillator from '../components/Oscillator'

const makeMapStateToProps = (initialState, { oscId }) => {

	const getOscillator = makeGetOscillatorById(oscId);

	return (state) => ({
		oscillator: getOscillator(state),
	});
}

// TODO: how do i pass down updateOscillator to the
// small components while removing their containers/connect fn
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    	updateOscillator: updateOscillator
   }
}

export default connect(
	makeMapStateToProps,
	mapDispatchToProps
)(Oscillator)
