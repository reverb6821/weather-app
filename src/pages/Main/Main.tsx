import { Outlet } from 'react-router-dom'
import * as React from 'react';

import { useDarkModeStore } from '@store/darkModeStore';
import DarkModeToggle from '@/components/ThemeSwitcher/DarkModeToggle';
const Main: React.FC = () => {
  const { isDarkMode } = useDarkModeStore();
  
  return(
    <React.Fragment>
      <main className={`${isDarkMode ? 'dark' : ''}`}>
        <DarkModeToggle />
        <Outlet />
      </main>
    </React.Fragment>
  )}

export default Main