import React from 'react'
import NavBar from '../components/NavBar'
import Root from './Root'
import configureStore from '../store/configureStore'

const store = configureStore()

const App = () => {
  return (
    <div>
      <NavBar />
      <Root store={store} />
    </div>
  )
}


export default App
