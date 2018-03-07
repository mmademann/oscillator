import React from 'react'

const AddTodo = ({ input, onSubmit, inputText }) => {
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, input)}>
        <input ref={node => { input = node }} />
        <button type="submit">{inputText}</button>
      </form>
    </div>
  )
}
export default AddTodo
