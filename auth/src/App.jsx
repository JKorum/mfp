import React from 'react'
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
import Signin from './components/Signin'
import Signup from './components/Signup'

export default ({ history, onSignIn }) => (
  <div>
    <StylesProvider
      generateClassName={createGenerateClassName({
        productionPrefix: 'au',
      })}
    >
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin'>
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path='/auth/signup'>
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
)
