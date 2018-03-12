import React from 'react'
import Oscillator from '../containers/OscillatorContainer'

const OscillatorList = ({ oscillatorIds }) => (
    <div>
    	{oscillatorIds.map(oscId =>
	        <Oscillator
	            key={ `osc_${oscId}` }
	            oscId={oscId}
	        />
	    )}
    </div>
)

export default OscillatorList
