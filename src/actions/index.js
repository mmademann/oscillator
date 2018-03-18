let nextOscillatorId = 0

export const addOscillator = () => ({
	type: 'ADD_OSCILLATOR',
	id: nextOscillatorId++
})

export const updateOscillator = (payload, id) => ({
	type: 'UPDATE_OSCILLATOR',
	payload,
	id
})

export const pressKeyboard = (payload, id) => ({
	type: 'PRESS_KEYBOARD',
	payload,
	id
})

export const AUDIO_CONTEXT = new (window.AudioContext || window.webkitAudioContext)()
