import React from 'react'

const AddOscillator = ({ input, onSubmit }) => {
    return (
        <div className="add-oscillator">
            <form onSubmit={(e) => onSubmit(e, input)}>
            <input
                placeholder="Frequency"
                type="number"
                min="100"
                max="1450"
                ref={node => { input = node }}
            />
            <button type="submit">Add Oscillator</button>
            </form>
        </div>
    )
}
export default AddOscillator
