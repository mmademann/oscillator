import React from 'react'
import Playback from './Playback'

const Oscillator = ({ onStart, onStop }) => (
	<div className="oscillator-row">
		<Playback
			onStart={ onStart }
			onStop={ onStop }
		/>
	</div>
)

export default Oscillator
