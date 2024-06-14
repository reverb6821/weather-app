import { createRoot } from 'react-dom/client'
import * as React from 'react'

import RootComponent from '@routes/RootComponent'
import '@styles/index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
)
