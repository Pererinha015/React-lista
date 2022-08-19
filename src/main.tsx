import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Comp from './Comp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Comp />
  </React.StrictMode>
)
