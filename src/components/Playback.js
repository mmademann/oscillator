import React from 'react'

const Playback = ({ frequency, onStart, onStop }) => (
    <div className="control-row">
        Oscillator {frequency} {" "}
        <button onClick={onStart}>Play</button>
        <button onClick={onStop}>Stop</button>
    </div>
)

export default Playback
