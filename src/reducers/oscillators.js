import { List, Map } from 'immutable'

const oscillatorsReducer = (state = List(), action) => {

	const index = state.findIndex(oscillator => oscillator.get('id') === action.id)

	// TODO: make one updateOscillator function just do something like:
	// return state.merge(action.payload) (pass an immutable Map() as the payload)
	// then connect updateOscillator in OscillatorContainer (with mapDispatchToProps)
	// pass updateOscillator to your smaller components (Playback, etc..) and you can remove
	// their containers

    switch (action.type) {
        case 'ADD_OSCILLATOR':
            return state.push(Map({
                id: action.id,
                waveformType: 'sine',
                playback: false,
                frequency: 196,
                detune: 100,
                gain: 0
            }))
        case 'TOGGLE_PLAYBACK':
            return state.setIn([index, 'playback'], action.playback)
        case 'UPDATE_WAVEFORM_TYPE':
        	return state.setIn([index, 'waveformType'], action.waveformType)
        case 'UPDATE_FREQUENCY':
        	return state.setIn([index, 'frequency'], action.frequency)
        case 'UPDATE_DETUNE':
        	return state.setIn([index, 'detune'], action.detune)
       	case 'UPDATE_GAIN':
       		return state.setIn([index, 'gain'], action.gain)
        default:
            return state
    }
}

export default oscillatorsReducer
