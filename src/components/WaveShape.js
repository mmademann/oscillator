import React from 'react'
import { fromJS } from 'immutable'
import { withHandlers } from 'recompose'

const WaveShape = withHandlers({

    updateWaveShape: ({ oscId, updateOscillatorDeep }) => event => {
        const input = event.target
        const payload = fromJS({
            id: oscId,
            waveShape: { [input.name]: input.value }
        })
        updateOscillatorDeep(payload)
    }

})(({
    waveShape,
    updateWaveShape
}) => {

    const activeBg = (status) => {
        return (status === 'enabled') ? 'red' : 'green'
    }

    return (
        <div>
            <div className="control-row waveshape">
                <button
                    name="status"
                    onClick={ updateWaveShape }
                    style={{ color: activeBg(waveShape.get('status')) }}
                    value={ waveShape.get('status') === 'enabled' ? 'disabled' : 'enabled' }>
                    { waveShape.get('status') === 'enabled'? 'Disable' : 'Enable' }
                    Wave Shape Distortion
                </button>
            </div>
            <div className="control-row waveshape">
                <p>Wave Shape: { `${waveShape.get('amount')}` }</p>
                <input
                    name="amount"
                    onInput={ updateWaveShape }
                    type="range" min="0" max="100"
                    defaultValue={ waveShape.get('amount') }>
                </input>
            </div>
        </div>
    )
})

export default WaveShape
