import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Бул жерди кош
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 2. App-ты ушул компоненттин ичине ал */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)