import React from 'react'
import { withHandlers } from 'recompose'

const Frequency = withHandlers({

	updateFrequency: ({ oscId, updateFrequency }) => event => {
		const freq = event.target.value
		updateFrequency(freq, oscId)
	},

	updateTune: ({ oscId, updateTune }) => event => {
		const finetune = event.target.value
		updateTune(finetune, oscId)
	},

	updateGain: ({ oscId, updateGain }) => event => {
		const vol = event.target.value
		updateGain(vol, oscId)
	}
})(({
	frequency,
	tune,
	gain,
	updateFrequency,
	updateTune,
	updateGain
}) => (
    <div>
		<div className="control-row">
			<p>Frequency:</p>
			<input
				type="range" min="100" max="1450"
				defaultValue={ frequency }
				onInput={ updateFrequency }>
			</input>
		</div>
		<div className="control-row">
			<p>Fine Tune:</p>
			<input
				type="range" min="-100" max="100"
				defaultValue={ tune }
				onInput={ updateTune }>
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
