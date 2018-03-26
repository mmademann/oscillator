import { createAction } from 'redux-actions'

import {
    ADD_OSCILLATOR,
    UPDATE_OSCILLATOR,
    UPDATE_ENVELOPE
} from '../constants/actionTypes'

export const addOscillator = createAction(ADD_OSCILLATOR)
export const updateOscillator = createAction(UPDATE_OSCILLATOR)
export const updateEnvelope = createAction(UPDATE_ENVELOPE)
