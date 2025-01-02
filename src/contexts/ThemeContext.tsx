// Define the types of themes
export type Theme = 'blue' | 'red' | 'aqua' | 'yellow';

// Interface for the context state
interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Default values for the context
const themeArray: Theme[] = ['blue', 'red', 'aqua'];

const defaultTheme: Theme =
  // themeArray[Math.floor(Math.random() * themeArray.length)];
  'aqua';

const defaultState: ThemeContextState = {
  theme: defaultTheme,
  setTheme: () => {}, // Placeholder function
};

export const themeStyles = {
  blue: '#394cfa',
  red: '#fa3939',
  aqua: '#00ffff', // Aqua color in light cyan
  yellow: '#ffff00',
};

export const darkThemeStyles = {
  blue: '#0f5f94',
  red: '#a62525',
  aqua: '#008b8b', // Darker shade of aqua (dark cyan)
  yellow: '#9f9f00',
};

export const themeShadows = {
  blue: 'rgba(24, 117, 223, 0.5)', // Adjusted for shadow effect
  red: 'rgba(135, 47, 31, 0.5)',
  aqua: 'rgba(0, 255, 255, 0.5)', // Aqua shadow with opacity
  yellow: 'rgba(255, 255, 0, 0.5)',
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
  const themeArray: Theme[] = ['blue', 'red', 'aqua'];
  return themeArray[(themeArray.indexOf(theme) + 1) % themeArray.length];
}
