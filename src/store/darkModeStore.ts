/* eslint-disable @typescript-eslint/no-unused-vars */
import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';

type DarkModeState = {
  isDarkMode: boolean;
  toggleDarkMode: () => void; // Function type for toggle action
};

export const useDarkModeStore = create<DarkModeState>(
  persist(
    (set, get) => ({
      isDarkMode: false, // Initial state (light mode)
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'darkMode', // Unique name for storage
      storage: createJSONStorage(() => localStorage), // Use JSON storage
    }
  )
);