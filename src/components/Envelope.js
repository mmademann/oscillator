import React from 'react'
import { withHandlers } from 'recompose'

const Envelope = withHandlers({

	updateEnvelope: ({ oscId, updateOscillator }) => event => {
		updateOscillator({
			key: event.target.name,
			value: event.target.value
		}, oscId)
	}

})(({
	attackTime,
	decayTime,
	sustainTime,
	releaseTime,
	updateEnvelope
}) => {
	return (
	    <div>
			<div className="control-row">
				<p>Attack:</p>
				<input
					type="range" min="0" max="5"
					name="attackTime"
					defaultValue={ attackTime }
					onInput={ updateEnvelope }>
				</input>
			</div>
			<div className="control-row">
				<p>Decay:</p>
				<input
					type="range" min="0" max="5"
					name="decayTime"
					defaultValue={ decayTime }
					onInput={ updateEnvelope }>
				</input>
			</div>
			<div className="control-row">
				<p>Sustain</p>
				<input
					type="range" min="0" max="5"
					name="sustainTime"
					defaultValue={ sustainTime }
					onInput={ updateEnvelope }>
				</input>
			</div>
			<div className="control-row">
				<p>Release:</p>
				<input
					type="range" min="0" max="5"
					name="releaseTime"
					defaultValue={ releaseTime }
					onInput={ updateEnvelope }>
				</input>
			</div>
		</div>
	)
})

export default Envelope
