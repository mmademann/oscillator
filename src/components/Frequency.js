import React from 'react'
import { withHandlers } from 'recompose'

const Frequency = withHandlers({

	updateSlider: ({ oscId, updateOscillator }) => event => {
		updateOscillator({
			key: event.target.name, // gain, detune, frequency
			value: event.target.value // new onInput value
		}, oscId)
	}

})(({
	gain,
	detune,
	frequency,
	updateSlider
}) => (
    <div>
		<div className="control-row">
			<p>Frequency:</p>
			<input
				type="range" min="0" max="1300"
				name="frequency"
				defaultValue={ frequency }
				onInput={ updateSlider }>
			</input>
		</div>
		<div className="control-row">
			<p>Fine Tune:</p>
			<input
				type="range" min="-100" max="100"
				name="detune"
				defaultValue={ detune }
				onInput={ updateSlider }>
			</input>
		</div>
		<div className="control-row">
			<p>Volume</p>
			<input
				type="range" min="-150" max="150"
				name="gain"
				defaultValue={ gain }
				onInput={ updateSlider }>
			</input>
		</div>
	</div>
))

export default Frequency
