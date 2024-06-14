import { Outlet } from 'react-router-dom'
import * as React from 'react';

const Main: React.FC = () => (
  <React.Fragment>
    <main>
      <Outlet />
    </main>
  </React.Fragment>
)

export default Main