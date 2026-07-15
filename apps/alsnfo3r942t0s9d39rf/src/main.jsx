import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Ap from './App'
import './styles/global.css'

const b = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={b}>
      <Ap />
    </BrowserRouter>
  </React.StrictMode>,
)
