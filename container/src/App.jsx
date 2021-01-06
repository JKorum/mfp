import React, { Suspense, lazy, useState, useCallback, useEffect } from 'react'
import { Router, Redirect, Switch, Route } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import Header from './components/Header'
import Progress from './components/Progress'

const AuthLazy = lazy(() => import('./components/AuthApp'))
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn && history.location.pathname !== '/dashboard') {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  const handleSignIn = useCallback(() => {
    setIsSignedIn(true)
  }, [])

  const handleSignOut = useCallback(() => {
    setIsSignedIn(false)
  }, [])

  return (
    <Router history={history}>
      <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path='/auth'>
            <AuthLazy onSignIn={handleSignIn} />
          </Route>
          <Route path='/dashboard'>
            {isSignedIn ? <DashboardLazy /> : <Redirect to='/' />}
          </Route>
          <Route path='/' component={MarketingLazy} />
        </Switch>
      </Suspense>
    </Router>
  )
}
