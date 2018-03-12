import React from 'react'
import Header from './Header'
import AddOscillatorContainer from '../containers/AddOscillatorContainer'
import OscillatorListContainer from '../containers/OscillatorListContainer'


const App = () => (
	<div>
		<Header />
		<AddOscillatorContainer />
		<OscillatorListContainer />
	</div>
)

export default App
