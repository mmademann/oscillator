import React from 'react'
import { withHandlers } from 'recompose'

const AddOscillator = withHandlers({
    onSubmit: ({ addOscillator }) => (e) => {
        e.preventDefault()
        addOscillator()
    }
})(({ onSubmit }) => (
    <div className="add-oscillator">
        <form onSubmit={onSubmit}>
            <button type="submit">Add Oscillator</button>
        </form>
    </div>
))

export default AddOscillator
