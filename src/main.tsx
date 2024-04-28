import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

const conatiner = document.getElementById('root')

if (conatiner) {
  ReactDOM.createRoot(conatiner).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
