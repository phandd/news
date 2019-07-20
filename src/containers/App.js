import React from 'react'
import Root from './Root'
import configureStore from '../store/configureStore'

const store = configureStore()

const App = () => {
  return (
    <div>
      <Root store={store} />
    </div>
  )
}


export default App
