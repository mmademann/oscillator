import { connect } from 'react-redux'

import OscillatorList from '../components/OscillatorList'
import { getOscillatorIds } from '../selectors/oscillators'

const mapStateToProps = (state, props) => {
    return {
        oscillatorIds: getOscillatorIds(state)
    }
}

export default connect(mapStateToProps, null)(OscillatorList)
