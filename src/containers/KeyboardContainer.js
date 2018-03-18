import { connect } from 'react-redux'
import { updateOscillator } from '../actions'

import Keyboard from '../components/Keyboard'

export default connect(null, { updateOscillator })(Keyboard)
