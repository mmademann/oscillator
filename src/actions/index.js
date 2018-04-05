import { createAction } from 'redux-actions'

import {
    ADD_OSCILLATOR,
    UPDATE_OSCILLATOR,
    UPDATE_OSCILLATOR_DEEP,
} from '../constants/actionTypes'

export const addOscillator = createAction(ADD_OSCILLATOR)
export const updateOscillator = createAction(UPDATE_OSCILLATOR)
export const updateOscillatorDeep = createAction(UPDATE_OSCILLATOR_DEEP)
