import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch, ownProps }) => {
  let input

  const onSubmit = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={node => { input = node }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const VisibleAddTodo = connect()(AddTodo)

export default VisibleAddTodo
