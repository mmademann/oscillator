import React from 'react'

const AddOscillator = ({ input, onSubmit }) => {
    return (
        <div className="add-oscillators">
            <form onSubmit={onSubmit}>
            	<button type="submit">Add Oscillator</button>
            </form>
        </div>
    )
}
export default AddOscillator
