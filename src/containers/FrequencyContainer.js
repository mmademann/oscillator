import { connect } from 'react-redux'
import {
	updateFrequency,
	updateDetune,
	updateGain
} from '../actions'

import Frequency from '../components/Frequency'

export default connect(
	null,
	{
		updateFrequency,
		updateDetune,
		updateGain
	}
)(Frequency)
