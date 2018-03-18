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
    	        gain: 0,
    	        envelope: {}, // TODO: move ADSR props here and merge with state
    	        attackTime: 2.01,
    	        decayTime: 2.3,
    	        sustainTime: 1.2,
    	        releaseTime: 1,
    	        sustainLevel: 0.5,
    	        gateTime: 1,
    	        duration: 1,
    	        peakLevel: 1,
    	        epsilon: 0.001,
    	        attackCurve: 'lin',
    	        decayCurve: 'lin',
    	        releaseCurve: 'lin'
    	    }))
    	case 'UPDATE_OSCILLATOR':
    		return state.setIn(
    			[index, action.payload.key],
    			action.payload.value
    		)
        case 'PRESS_KEYBOARD':
        	return state.setIn(
        		[index, action.payload.key],
        		action.payload.value
        	)
        default:
            return state
    }
}

export default oscillatorsReducer
