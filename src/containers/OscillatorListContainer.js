import { connect } from 'react-redux'

import OscillatorList from '../components/OscillatorList'
import { getOscillatorIds } from '../selectors/oscillators'

const mapStateToProps = (state, ownProps) => {
    return {
        oscillatorIds: getOscillatorIds(state)
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {}
// }

// const OscillatorListContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(OscillatorList)

// export default OscillatorListContainer
export default connect(mapStateToProps, null)(OscillatorList)
