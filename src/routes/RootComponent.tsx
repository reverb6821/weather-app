import { Routes, Route } from 'react-router-dom';
import * as React from 'react'

const NotFound = React.lazy(() => import('@pages/NotFound'))
const Main = React.lazy(()=> import('@pages/Main'))
const Home = React.lazy(()=> import('@routes/Home'))

function RootComponent() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<React.Suspense fallback={<div>Loading...</div>}><Main/></React.Suspense>}>
          <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><Home/></React.Suspense>} />
          <Route path="*" element={<React.Suspense fallback={<div>Loading...</div>}><NotFound/></React.Suspense>} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default RootComponent
