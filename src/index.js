import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.less'
import App from './containers/App'

render(
  <BrowserRouter basename="/">
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
)
