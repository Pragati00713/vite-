import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Pragati from './Pragati.jsx'
import Cards from './Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Pragati />
    <Cards/>
  </React.StrictMode>,
)
