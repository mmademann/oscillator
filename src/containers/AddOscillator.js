import { connect } from 'react-redux'
import { addOscillator } from '../actions'
import AddOscillator from '../components/AddOscillator'

const mapStateToProps = (state, ownProps) => {
    return {
        input: null
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (e) => {
            e.preventDefault()
            dispatch(addOscillator())
        }
    }
}

const AddOscillatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddOscillator)

export default AddOscillatorContainer
