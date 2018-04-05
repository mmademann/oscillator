import { List, Map } from 'immutable'
import uuid from 'uuid-v4'

import { DEFAULT_STATE } from '../constants/state'
import {
    ADD_OSCILLATOR,
    UPDATE_OSCILLATOR,
    UPDATE_OSCILLATOR_DEEP,
} from '../constants/actionTypes'

const oscillatorsReducer = (state = List(), { type, payload = Map(), id = uuid() }) => {

    const index = state.findIndex(oscillator =>
        oscillator.get('id') === payload.get('id'))

    switch (type) {

        case ADD_OSCILLATOR:
            // pushes a default obj onto the state List
            return state.push(DEFAULT_STATE.set('id', id))

        case UPDATE_OSCILLATOR:
            // shallow merges the new payload
            return state.mergeIn([index], payload)

        case UPDATE_OSCILLATOR_DEEP:
            // generic deep merge of the new payload
            return state.mergeDeepIn([index], payload)

        default: return state
    }
}

export default oscillatorsReducer
