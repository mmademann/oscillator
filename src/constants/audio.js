import { fromJS } from 'immutable'

export const AUDIO_CONTEXT = new (window.AudioContext || window.webkitAudioContext)()

export const KEYCODES = fromJS([
    /**
        whole notes
    **/
    {
        code: 'KeyA',
        note: 'F',
        frequency : 174.6
    },
    {
        code: 'KeyS',
        note: 'G',
        frequency : 196.0
    },
    {
        code: 'KeyD',
        note: 'A',
        frequency : 220.0
    },
    {
        code: 'KeyF',
        note: 'B',
        frequency : 246.9
    },
    {
        code: 'KeyG',
        note: 'C',
        frequency : 261.6
    },
    {
        code: 'KeyH',
        note: 'D',
        frequency : 293.7
    },
    {
        code: 'KeyJ',
        note: 'E',
        frequency : 329.6
    },
    {
        code: 'KeyK',
        note: 'F',
        frequency : 349.2
    },
    {
        code: 'KeyL',
        note: 'G',
        frequency : 392.0
    },

    /**
        sharp notes
    **/
    {
        code: 'KeyW',
        note: 'FS',
        frequency : 185.0
    },
    {
        code: 'KeyE',
        note: 'GS',
        frequency : 207.7
    },
    {
        code: 'KeyR',
        note: 'AS',
        frequency : 233.1
    },
    {
        code: 'KeyR',
        note: 'CS',
        frequency : 277.2
    },
    {
        code: 'KeyT',
        note: 'DS',
        frequency : 311.1
    },
    {
        code: 'KeyY',
        note: 'FS',
        frequency : 370.0
    },
    {
        code: 'KeyU',
        note: 'GS',
        frequency : 415.3
    },
    {
        code: 'KeyI',
        note: 'AS',
        frequency : 466.2
    },
    {
        code: 'KeyO',
        note: 'CS',
        frequency : 554.4
    },
    {
        code: 'KeyP',
        note: 'DS',
        frequency : 622.3
    },
])
