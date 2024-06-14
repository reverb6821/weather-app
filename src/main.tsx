import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import * as React from 'react'

import RootComponent from '@routes/RootComponent'
import '@styles/index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  </React.StrictMode>,
)
