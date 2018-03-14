import { connect } from 'react-redux'
import { updateWaveformType } from '../actions'

import WaveformType from '../components/WaveformType'

export default connect(
	null,
	{
		updateWaveformType,
	}
)(WaveformType)
