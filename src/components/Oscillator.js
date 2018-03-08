import React from 'react'
import Playback from './Playback'

const Oscillator = ({ frequency, onStart, onStop }) => (
	<div className="oscillator-row">
		<Playback
			frequency={ frequency }
			onStart={ onStart }
			onStop={ onStop }
		/>
	</div>
)

export default Oscillator
