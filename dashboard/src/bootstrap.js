import { createApp } from 'vue'
import Dashboard from './components/Dashboard'

const mount = (elem) => {
  const app = createApp(Dashboard)
  app.mount(elem)
}

if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#dev-dashboard-root')

  if (root) {
    mount(root)
  }
}

export { mount }
