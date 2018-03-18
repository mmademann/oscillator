import { connect } from 'react-redux'
import { updateOscillator } from '../actions'

import WaveformType from '../components/WaveformType'

export default connect(null, { updateOscillator })(WaveformType)
