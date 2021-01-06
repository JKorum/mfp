import React from 'react'
import ReacDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

const mount = (
  elem,
  { onNavigate, defaultHistory, initialPath, onSignIn } = {}
) => {
  const history =
    defaultHistory ??
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReacDOM.render(<App history={history} onSignIn={onSignIn} />, elem)

  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName)
      }
    },
  }
}

if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#dev-auth-root')

  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
