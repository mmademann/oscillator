let nextOscillatorId = 0

export const addOscillator = () => ({
	type: 'ADD_OSCILLATOR',
	id: nextOscillatorId++
})

export const togglePlayback = (playback, id) => ({
	type: 'TOGGLE_PLAYBACK',
	 playback,
	 id
})

export const updateWaveformType = (waveformType, id) => ({
	type: 'UPDATE_WAVEFORM_TYPE',
	waveformType,
	id
})

export const updateFrequency = (frequency, id) => ({
	type: 'UPDATE_FREQUENCY',
	frequency,
	id
})

export const updateDetune = (detune, id) => ({
	type: 'UPDATE_DETUNE',
	detune,
	id
})

export const updateGain = (gain, id) => ({
	type: 'UPDATE_GAIN',
	gain,
	id
})

export const AUDIO_CONTEXT = new (window.AudioContext || window.webkitAudioContext)()
