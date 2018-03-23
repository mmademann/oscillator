import React from 'react'
import { Map } from 'immutable'

import { withHandlers } from 'recompose'

const Frequency = withHandlers({

	updateSlider: ({ oscId, updateOscillator }) => event => {
		updateOscillator(Map({
			id: oscId,
			[event.target.name]: event.target.value
		}))
	}

})(({
	gain,
	detune,
	frequency,
	updateSlider
}) => (
    <div>
		<div className="control-row">
			<p>Frequency: { frequency }</p>
			<input
				type="range" min="0" max="1300"
				name="frequency"
				defaultValue={ frequency }
				onInput={ updateSlider }>
			</input>
		</div>
		<div className="control-row">
			<p>Detune: { detune }</p>
			<input
				type="range" min="-100" max="100"
				name="detune"
				defaultValue={ detune }
				onInput={ updateSlider }>
			</input>
		</div>
		<div className="control-row">
			<p>Gain: { `${gain}%` }</p>
			<input
				type="range" min="-100" max="100"
				name="gain"
				defaultValue={ gain }
				onInput={ updateSlider }>
			</input>
		</div>
	</div>
))

export default Frequency
