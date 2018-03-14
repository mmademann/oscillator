import React from 'react'
import { withHandlers } from 'recompose'

const Frequency = withHandlers({

	updateFrequency: ({ oscId, updateFrequency }) => event => {
		const freq = event.target.value
		updateFrequency(freq, oscId)
	},

	updateDetune: ({ oscId, updateDetune }) => event => {
		const det = event.target.value
		updateDetune(det, oscId)
	},

	updateGain: ({ oscId, updateGain }) => event => {
		const vol = event.target.value
		updateGain(vol, oscId)
	}
})(({
	frequency,
	detune,
	gain,
	updateFrequency,
	updateDetune,
	updateGain
}) => (
    <div>
		<div className="control-row">
			<p>Frequency:</p>
			<input
				type="range" min="0" max="1300"
				defaultValue={ frequency }
				onInput={ updateFrequency }>
			</input>
		</div>
		<div className="control-row">
			<p>Fine Tune:</p>
			<input
				type="range" min="-100" max="100"
				defaultValue={ detune }
				onInput={ updateDetune }>
			</input>
		</div>
		<div className="control-row">
			<p>Volume</p>
			<input
				type="range" min="-150" max="150"
				defaultValue={ gain }
				onInput={ updateGain }>
			</input>
		</div>
	</div>
))

export default Frequency
