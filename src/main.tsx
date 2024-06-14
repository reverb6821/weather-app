import React from 'react'
import ReactDOM from 'react-dom/client'
import RootComponent from '@routes/RootComponent'
import '@styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
)
