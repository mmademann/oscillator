import React from 'react'

const AddOscillator = ({ input, onSubmit, inputText }) => {
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, input)}>
        <input
        	placeholder="Frequency"
        	type="number"
        	min="0"
        	ref={node => { input = node }}
        />
        <button type="submit">Add Oscillator</button>
      </form>
    </div>
  )
}
export default AddOscillator
