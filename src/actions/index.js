let nextOscillatorId = 0

export const addOscillator = () => ({
	type: 'ADD_OSCILLATOR', id: nextOscillatorId++
})

export const togglePlayback = (playback, id) => ({
	type: 'TOGGLE_PLAYBACK', playback, id
})

export const updateWaveform = (waveform, id) => ({
	type: 'UPDATE_WAVEFORM', waveform, id
})

export const updateFrequency = (frequency, id) => ({
	type: 'UPDATE_FREQUENCY', frequency, id
})

export const updateTune = (tune, id) => ({
	type: 'UPDATE_TUNE', tune, id
})

export const updateGain = (gain, id) => ({
	type: 'UPDATE_GAIN', gain, id
})

export const AUDIO_CONTEXT = new (window.AudioContext || window.webkitAudioContext)()
