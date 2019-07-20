import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ROUTES } from '../constants'
import News from '../components/News'
import History from '../components/History'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Switch>
        <Redirect exact from="/" to={ROUTES.news} />
        <Route exact path={ROUTES.news} component={News} />
        <Route path={ROUTES.history} component={History} />
      </Switch>
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
