import { connect } from 'react-redux'

import { makeGetOscillatorById } from '../selectors/oscillators'
import {
    updateOscillator,
    updateOscillatorDeep,
} from '../actions'

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

    // return a function, not an object (re: memoized),
    // since each instance needs its own unique selector
    return mapStateToProps
}

export default connect(
    makeMapStateToProps,
    {
        updateOscillator,
        updateOscillatorDeep,
    }
)(Oscillator)
