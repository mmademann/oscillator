import { connect } from 'react-redux'
import { updateOscillator } from '../actions'

import Playback from '../components/Playback'

export default connect(null, { updateOscillator })(Playback)
