import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import oscillators from './oscillators'
import playback from './playback'
import todos from './todos'

const todoApp = combineReducers({
	visibilityFilter,
	oscillators,
	playback,
	todos
})

export default todoApp
