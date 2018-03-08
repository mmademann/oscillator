import { connect } from 'react-redux'
import OscillatorList from '../components/OscillatorList'

const mapStateToProps = (state, ownProps) => {
    return {
        oscillators: state.oscillators
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const OscillatorListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OscillatorList)

export default OscillatorListContainer
