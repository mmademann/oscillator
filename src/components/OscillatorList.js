import React from 'react'
import Oscillator from '../containers/Oscillator'

const OscillatorList = ({ oscillators }) => (
    <div>
    	{oscillators.map(osc =>
	        <Oscillator
	        	id={osc.id}
	            key={ `osc_${osc.id}` }
	            frequency={ osc.frequency }
	            {...osc}
	        />
	    )}
    </div>
)

export default OscillatorList
