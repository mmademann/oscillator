import React from 'react'

const AddTodo = ({ input, onSubmit, inputText }) => {
	// let input;
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, input)}>
        <input ref={node => { input = node }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
export default AddTodo
