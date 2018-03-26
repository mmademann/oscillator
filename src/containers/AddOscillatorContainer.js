import { connect } from 'react-redux'

import { addOscillator } from '../actions'
import AddOscillator from '../components/AddOscillator'

export default connect(null, { addOscillator })(AddOscillator)
