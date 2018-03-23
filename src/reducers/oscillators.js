import { List, Map } from 'immutable'
import uuid from 'uuid-v4'

import { DEFAULT_STATE } from '../constants/state'
import {
	ADD_OSCILLATOR,
	UPDATE_OSCILLATOR,
	UPDATE_ENVELOPE
} from '../constants/actionTypes'

const oscillatorsReducer = (state = List(), { type, payload = Map() }) => {

	const index = state.findIndex(oscillator => oscillator.get('id') === payload.get('id'))

    switch (type) {
    	case ADD_OSCILLATOR:
    	    return state.push(
    	    	DEFAULT_STATE.set('id', uuid())
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
