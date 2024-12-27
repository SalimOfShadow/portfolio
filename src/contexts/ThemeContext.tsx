// Define the types of themes
export type Theme = 'blue' | 'red' | 'yellow' | 'green';

// Interface for the context state
interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Default values for the context
const themeArray: Theme[] = ['blue', 'red'];

const defaultTheme: Theme =
  themeArray[Math.floor(Math.random() * themeArray.length)];

const defaultState: ThemeContextState = {
  theme: defaultTheme,
  setTheme: () => {}, // Placeholder function
};

export const themeStyles = {
  blue: '#394cfa',
  red: '#fa3939',
  green: 'green',
  yellow: 'yellow',
};

export const darkThemeStyles = {
  blue: '0f5f94',
  red: '#a62525',
  green: 'green',
  yellow: 'yellow',
};

export const themeShadows = {
  blue: '#1875df',
  red: '#872f1f5e',
  green: 'green',
  yellow: 'yellow',
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
  return themeArray[(themeArray.indexOf(theme) + 1) % themeArray.length];
}
