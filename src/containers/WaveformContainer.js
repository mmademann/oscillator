import { connect } from 'react-redux'

import {
	updateWaveform,
} from '../actions'

import Waveform from '../components/Waveform'

export default connect(
	null,
	{
		updateWaveform,
	}
)(Waveform)
