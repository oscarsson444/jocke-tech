// components/AppContextProvider.js
"use client";

import { createContext, useState } from "react";

export const AppContext = createContext({
  showMenu: true,
  toggleMenu: () => {}, // Placeholder
});

export default function AppContextProvider({ children }) {
  const [showMenu, setShowMenu] = useState(true);

  // Function to toggle the menu state
  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <AppContext.Provider value={{ showMenu, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
}
