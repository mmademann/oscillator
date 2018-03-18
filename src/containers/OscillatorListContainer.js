import { connect } from 'react-redux'

import OscillatorList from '../components/OscillatorList'
import { getOscillatorIds } from '../selectors/oscillators'

const mapStateToProps = (state, ownProps) => {
    return {
        oscillatorIds: getOscillatorIds(state)
    }
}

export default connect(mapStateToProps, null)(OscillatorList)
