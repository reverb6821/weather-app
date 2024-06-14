import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import * as React from 'react'
import { QueryClientProvider } from '@tanstack/react-query';

import RootComponent from '@routes/RootComponent'
import queryClient from '@/query/QueryClient';

import '@styles/index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RootComponent />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
