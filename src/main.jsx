import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //jsx es javascript y un renderizado
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


//StrictMode lo que hace es renderizar un par de veces lo que estmos haciendo