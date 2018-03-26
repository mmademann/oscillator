import { List, Map } from 'immutable'
import uuid from 'uuid-v4'

import { DEFAULT_STATE } from '../constants/state'
import {
    ADD_OSCILLATOR,
    UPDATE_OSCILLATOR,
    UPDATE_ENVELOPE
} from '../constants/actionTypes'

const oscillatorsReducer = (state = List(), { type, payload = Map(), id = uuid() }) => {

    const index = state.findIndex(
        oscillator => oscillator.get('id') === payload.get('id')
    )

    switch (type) {

        case ADD_OSCILLATOR:
            // return the default obj at
            // the end of the state List
            return state.push( DEFAULT_STATE.set('id', id) )

        case UPDATE_OSCILLATOR:
            // return a shallow merge of the payload
            // into the existing state at index
            return state.mergeIn( [index], payload )

        case UPDATE_ENVELOPE:
            // return a deep merge of the envelope
            // properties into the existing state at index
            return state.mergeDeepIn( [index], payload )

        default: return state
    }
}

export default oscillatorsReducer
