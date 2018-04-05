import { fromJS } from 'immutable'

export const DEFAULT_STATE = fromJS({
    waveformType: 'sine',
    playback: false,
    frequency: 196,
    detune: 100,
    gain: 0,
    envelope: {
        attackTime: 2,
        decayTime: 4.0,
        sustainTime: 5.0,
        releaseTime: 7.0,
    },
    waveShape: {
        status: 'disabled',
        amount: 30
    }
})
