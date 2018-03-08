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
    onSubmit: (e, input) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(
        addOscillator(
          input.value
        )
      )
      input.value = ''
    }
  }
}

const AddOscillatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOscillator)

export default AddOscillatorContainer
