import { connect } from 'react-redux'
import { updateOscillator } from '../actions'

import Envelope from '../components/Envelope'

export default connect(null, { updateOscillator })(Envelope)
