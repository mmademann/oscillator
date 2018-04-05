import React from 'react'
import { Map } from 'immutable'
import { withHandlers } from 'recompose'
import { KEYCODES } from '../constants/audio'

const Keyboard = withHandlers({

    pianoKeyDown: ({ oscId, updateOscillator }) => event => {
        updateOscillator(Map({
            id: oscId,
            frequency: event.target.value,
            playback: true
        }))
    },

    pianoKeyUp: ({ oscId, updateOscillator }) => event => {
        updateOscillator(Map({
            id: oscId,
            playback: false
        }))
    },

    keypressHandler: ({ oscId, updateOscillator }) => event => {
        updateOscillator(Map({
            id: oscId,
            playback: true,
            frequency: KEYCODES
                .find(keycode => keycode.get('code') === event.code)
                .get('frequency')
        }))
    },

    keyupHandler: ({ oscId, updateOscillator }) => event => {
        updateOscillator(Map({
            id: oscId,
            playback: false
        }))
    }

})(({
    pianoKeyDown,
    pianoKeyUp,
    keyupHandler,
    keypressHandler
}) => {

    // todo: hook up computer keys to piano keys
    // question: is this the right way to do this?
    document.onkeypress = keypressHandler
    document.onkeyup = keyupHandler

    return (
        <ul className="keys">
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="174.6"
                className="white f w1">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="185.0"
                className="black fs b1">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="196.0"
                className="white g w2">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="207.7"
                className="black gs b2">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="220.0"
                className="white a w3">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="233.1"
                className="black as b3">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="246.9"
                className="white b w4">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="261.6"
                className="white c w5">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="277.2"
                className="black cs b4">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="293.7"
                className="white d w6">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="311.1"
                className="black ds b5">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="329.6"
                className="white e w7">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="349.2"
                className="white f w8">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="370.0"
                className="black fs b6">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="392.0"
                className="white g w9">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="415.3"
                className="black gs b7">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="440.0"
                className="white a w10">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="466.2"
                className="black as b8">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="493.9"
                className="white b w11">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="523.3"
                className="white c w12">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="554.4"
                className="black cs b9">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="587.3"
                className="white d w13">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="622.3"
                className="black ds b10">
            </li>
            <li
                onMouseDown={ pianoKeyDown }
                onMouseUp={ pianoKeyUp }
                value="659.3"
                className="white e w14">
            </li>
        </ul>
    )
})

export default Keyboard
