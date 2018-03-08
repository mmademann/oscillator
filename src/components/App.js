import React from 'react'
import Header from './Header'
import AddOscillator from '../containers/AddOscillator'
import OscillatorList from '../containers/OscillatorList'


const App = () => (
	<div>
		<Header />
		<AddOscillator />
		<OscillatorList />
	</div>
)

export default App
