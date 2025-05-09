import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

const container = document.getElementById('root')

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
