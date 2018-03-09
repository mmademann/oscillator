import React from 'react'

const Frequency = ({ frequency, tune, gain, updateFrequency, updateTune, updateGain }) => {
	return (
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
	)
}

export default Frequency
