import React from 'react'
import OscillatorContainer from '../containers/OscillatorContainer'

const OscillatorList = ({ oscillatorIds }) => (
    <div>
    	{oscillatorIds.map(oscId =>
	        <OscillatorContainer
	            key={ `osc_${oscId}` }
	            oscId={oscId}
	        />
	    )}
    </div>
)

export default OscillatorList
