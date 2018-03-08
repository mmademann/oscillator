let nextTodoId = 0
let nextOscillatorId = 0
let AudioContext = window.AudioContext || window.webkitAudioContext || null;

export const AUDIO_CONTEXT = new AudioContext();

export const addTodo = (text) => ({
	type: 'ADD_TODO', id: nextTodoId++, text
})

export const addOscillator = (frequency) => ({
	type: 'ADD_OSCILLATOR', id: nextOscillatorId++, frequency
})

export const toggleSound = () => ({
	type: 'TOGGLE_SOUND'
})

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO', id
})

export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER', filter
})
