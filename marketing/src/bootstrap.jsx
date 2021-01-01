import React from 'react'
import ReacDOM from 'react-dom'
import App from './App'

const mount = (elem) => {
  ReacDOM.render(<App />, elem)
}

if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#dev-marketing-root')

  if (root) {
    mount(root)
  }
}

export { mount }
