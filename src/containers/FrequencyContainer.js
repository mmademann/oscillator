import { connect } from 'react-redux'
import { updateOscillator } from '../actions'

import Frequency from '../components/Frequency'

export default connect(null, { updateOscillator })(Frequency)
