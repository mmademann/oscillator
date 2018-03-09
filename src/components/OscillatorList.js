import React from 'react'
import Oscillator from '../containers/Oscillator'

const OscillatorList = ({ oscillators }) => (
    <div>
    	{oscillators.map(osc =>
	        <Oscillator
	            key={ `osc_${osc.id}` }
	            {...osc}
	        />
	    )}
    </div>
)

export default OscillatorList
