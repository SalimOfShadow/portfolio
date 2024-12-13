// Define the types of themes
export type Theme = 'blue' | 'red' | 'yellow' | 'green';

// Interface for the context state
interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Default values for the context
const defaultTheme: Theme = 'blue';
const defaultState: ThemeContextState = {
  theme: defaultTheme,
  setTheme: () => {}, // Placeholder function
};

// Create the Theme Context
import React, { createContext, useContext, useState, ReactNode } from 'react';

const ThemeContext = createContext<ThemeContextState>(defaultState);

// Theme Provider Component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use Theme Context
export const useTheme = (): ThemeContextState => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export function changeTheme(theme: Theme): Theme {
  const themeArray: Theme[] = ['blue', 'red'];
  console.log('Should happen');
  return themeArray[themeArray.indexOf(theme) + 1];
}
