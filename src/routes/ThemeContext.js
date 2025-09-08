import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

// Create the ThemeContext
const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme(); // Automatically detects system theme

  return (
    <ThemeContext.Provider value={{ theme: systemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme in any component
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
