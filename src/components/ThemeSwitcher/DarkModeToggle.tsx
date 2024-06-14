import * as React from 'react'

import { useDarkModeStore } from '@store/darkModeStore';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();
  return(
    <React.Fragment>
      <button 
        type="button"
        className="text-slate-600 dark:text-slate-300 rounded-md shadow-md text-sm w-10 h-10 inline-flex justify-center items-center bg-slate-300 dark:bg-slate-600"
        onClick={toggleDarkMode}
      >
        {isDarkMode === true ? ('dark'): ('light')}
      </button>
    </React.Fragment>
  )}

export default DarkModeToggle