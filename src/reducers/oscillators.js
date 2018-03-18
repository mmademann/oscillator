import { List, Map, fromJS } from 'immutable'

const oscillatorsReducer = (state = List(), action) => {

	const index = state.findIndex(oscillator => oscillator.get('id') === action.id)

	// TODO: make one updateOscillator function just do something like:
	// return state.merge(action.payload) (pass an immutable Map() as the payload)
	// then connect updateOscillator in OscillatorContainer (with mapDispatchToProps)
	// pass updateOscillator to your smaller components (Playback, etc..) and you can remove
	// their containers

	// TODO: move ADSR props to envelope {} and merge properly with state
	// TODO: how do i dispatch multiple actions? using an array?
	// TODO: figure out how to properly merge state using immutable

	// TODO: how do i pass  updateOscillator to the small components
	// TODO: how to remove containers from small components

	// TODO: clone ADSREnvelope if it already exists

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
    	        sustainTime: 3,
    	        releaseTime: 4,
    	        sustainLevel: 0.5,
    	        gateTime: Infinity
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
