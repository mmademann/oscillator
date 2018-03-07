import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state, ownProps) => {
  return {
    inputText: 'Add Todo'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (e, input) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }
  }
}

const VisibleAddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default VisibleAddTodo
