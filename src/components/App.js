import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Controller from './Controller'
import AddOscillator from '../containers/AddOscillator'
import OscillatorList from '../containers/OscillatorList'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'


const App = () => (
  <div>
  	<Header />
    <AddOscillator />
    <OscillatorList />
    <Controller />
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App
