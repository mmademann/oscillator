import { connect } from 'react-redux'
import { togglePlayback } from '../actions'

import Playback from '../components/Playback'

export default connect(
	null,
	{
		togglePlayback,
	}
)(Playback)
