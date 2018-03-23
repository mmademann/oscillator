import { List, Map, fromJS } from 'immutable'
import uuid from 'uuid-v4'

import {
	ADD_OSCILLATOR,
	UPDATE_OSCILLATOR,
	UPDATE_ENVELOPE
} from '../constants/actionTypes'

const oscillatorsReducer = (state = List(), { type, payload = Map() }) => {

	const index = state.findIndex(oscillator => oscillator.get('id') === payload.get('id'))

	const defaultState = Map(fromJS({
		id: uuid(),
	    waveformType: 'sine',
	    playback: false,
	    frequency: 196,
	    detune: 100,
	    gain: 0,
	    envelope: {
	    	attackTime: 2,
	    	decayTime: 4.0,
	    	sustainTime: 5.0,
	    	releaseTime: 7.0,
	    }
	}))

    switch (type) {
    	case ADD_OSCILLATOR:
    	    return state.push(
    	    	defaultState
    	    )
    	case UPDATE_OSCILLATOR:
	   		return state.mergeIn(
	   			[index], payload
	   		)
    	case UPDATE_ENVELOPE:
	   		return state.mergeDeepIn(
	   			[index], payload
	   		)
        default: return state
    }
}

export default oscillatorsReducer
