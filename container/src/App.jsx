import React, { Suspense, lazy, useState, useCallback } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Progress from './components/Progress'

const AuthLazy = lazy(() => import('./components/AuthApp'))
const MarketingLazy = lazy(() => import('./components/MarketingApp'))

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleSignIn = useCallback(() => {
    setIsSignedIn(true)
  }, [])

  const handleSignOut = useCallback(() => {
    setIsSignedIn(false)
  }, [])

  return (
    <BrowserRouter>
      <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path='/auth'>
            <AuthLazy onSignIn={handleSignIn} />
          </Route>
          <Route path='/' component={MarketingLazy} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
