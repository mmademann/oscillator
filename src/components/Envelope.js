import React from 'react'
import { fromJS } from 'immutable'
import { withHandlers } from 'recompose'

const Envelope = withHandlers({

    updateEnvelope: ({ oscId, updateOscillatorDeep }) => event => {
        const input = event.target
        const payload = fromJS({
            id: oscId,
            envelope: { [input.name]: input.value }
        })
        updateOscillatorDeep(payload)
    }

})(({
    envelope,
    updateEnvelope
}) => {
    return (
        <div>
            <div className="control-row">
                <p>Attack: { envelope.get('attackTime') }</p>
                <input
                    type="range" min="0" max="10"
                    name="attackTime"
                    defaultValue={ envelope.get('attackTime') }
                    onInput={ updateEnvelope }>
                </input>
            </div>
            <div className="control-row">
                <p>Decay: { envelope.get('decayTime') }</p>
                <input
                    type="range" min="0" max="10"
                    name="decayTime"
                    defaultValue={ envelope.get('decayTime') }
                    onInput={ updateEnvelope }>
                </input>
            </div>
            <div className="control-row">
                <p>Sustain: { envelope.get('sustainTime') }</p>
                <input
                    type="range" min="0" max="10"
                    name="sustainTime"
                    defaultValue={ envelope.get('sustainTime') }
                    onInput={ updateEnvelope }>
                </input>
            </div>
            <div className="control-row">
                <p>Release: { envelope.get('releaseTime') }</p>
                <input
                    type="range" min="0" max="10"
                    name="releaseTime"
                    defaultValue={ envelope.get('releaseTime') }
                    onInput={ updateEnvelope }>
                </input>
            </div>
        </div>
    )
})

export default Envelope
