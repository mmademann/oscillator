import { createSelector } from 'reselect'

export const getOscillators = state => state.oscillators

export const getOscillatorIds = createSelector(
	[getOscillators],
	oscillators => oscillators.map(oscillator => oscillator.get('id'))
)

// in order to share a selector across multiple Oscillator
// components and retain memoization, each instance of the
// component needs its own private copy of the selector.
// makeGetOscillatorById returns a new copy of a
// getOscillatorById selector each time it's called.
export const makeGetOscillatorById = id => createSelector(
	[getOscillators],
	oscillators => oscillators.find(oscillator => oscillator.get('id') === id)
)

// DO NOT USE
// (depricated... see comments above)
// export const getOscillatorById = createSelector(
// 	[getOscillators],
// 	oscillators => oscillators.find(oscillator => oscillator.get('id') === id)
// )
