import React from 'react'

const Playback = ({ onStart, onStop }) => (
    <div className="control-row">
        Oscillator
        <button onClick={onStart}>Play</button>
        <button onClick={onStop}>Stop</button>
    </div>
)

export default Playback
