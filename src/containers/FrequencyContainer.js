import { connect } from 'react-redux'
import {
	updateFrequency,
	updateTune,
	updateGain
} from '../actions'

import Frequency from '../components/Frequency'

export default connect(
	null,
	{
		updateFrequency,
		updateTune,
		updateGain
	}
)(Frequency)
