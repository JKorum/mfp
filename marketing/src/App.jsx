import React from 'react'
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default ({ history }) => (
  <div>
    <StylesProvider
      generateClassName={createGenerateClassName({
        productionPrefix: 'ma',
      })}
    >
      <Router history={history}>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route path='*' component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
)
