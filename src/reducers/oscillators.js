import { List, Map } from 'immutable'

const oscillatorsReducer = (state = List(), action) => {

	const index = state.findIndex(oscillator => oscillator.get('id') === action.id)

	// TODO: make one updateOscillator function just do something like:
	// return state.merge(action.payload) (pass an immutable Map() as the payload)
	// then connect updateOscillator in OscillatorContainer (with mapDispatchToProps)
	// pass updateOscillator to your smaller components (Playback, etc..) and you can remove
	// their containers

	// TODO: move ADSR props to envelope {} and merge properly with state

	// TODO: how do i parse multiple actions? using an array?

    switch (action.type) {
    	case 'ADD_OSCILLATOR':
    	    return state.push(Map({
    	        id: action.id,
    	        waveformType: 'sine',
    	        playback: false,
    	        frequency: 196,
    	        detune: 100,
    	        gain: 0,
    	        envelope: {},
    	        attackTime: 2.01,
    	        decayTime: 3.3,
    	        sustainTime: 4.2,
    	        releaseTime: 3
    	    }))
    	case 'UPDATE_OSCILLATOR':
    		return state.setIn(
    			[index, action.payload.key],
    			action.payload.value
    		)
        default:
            return state
    }
}

export default oscillatorsReducer
