import { createSelector } from 'reselect'

export const getOscillators = (state) => state.oscillators

export const getOscillatorIds = createSelector(
	[getOscillators],
	oscillators => oscillators.map(oscillator => oscillator.get('id'))
)

export const makeGetOscillatorById = (id) => createSelector(
	[getOscillators],
	oscillators => oscillators.find(oscillator => oscillator.get('id') === id)
)
