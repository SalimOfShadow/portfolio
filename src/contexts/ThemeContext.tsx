import { CookiesProvider, useCookies } from 'react-cookie';
// Define the types of themes
export type Theme = 'blue' | 'red' | 'aqua' | 'yellow';

// Interface for the context state
interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Default values for the context
const themeArray: Theme[] = ['blue', 'red', 'aqua'];

const defaultTheme: Theme = 'blue';
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
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { CharacterName } from './CharacterContext';

const ThemeContext = createContext<ThemeContextState>(defaultState);

// Theme Provider Component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // cookies.theme we can access the cookie like this,and select the next possible theme
  const [cookies, setCookie] = useCookies(['theme']);
  const [theme, setTheme] = useState<Theme>(
    themeArray[(themeArray.indexOf(cookies.theme) + 1) % themeArray.length] ||
      'blue'
  );

  useEffect(() => {
    console.log('Setting the cookie');
    setCookie('theme', theme, { path: '/' });
  }, [theme]);

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

export function changeTheme(character?: CharacterName, theme?: Theme): Theme {
  const themeArray: Theme[] = ['blue', 'red', 'aqua'];
  if (character && !theme) {
    switch (character) {
      case 'kyo': {
        return themeArray[themeArray.indexOf('blue')];
      }
      case 'iori': {
        return themeArray[themeArray.indexOf('red')];
      }
      case 'kula': {
        return themeArray[themeArray.indexOf('aqua')];
      }
    }
  } else {
    if (theme) {
      const themeArray: Theme[] = ['blue', 'red', 'aqua'];
      return themeArray[(themeArray.indexOf(theme) + 1) % themeArray.length];
    } else {
      return themeArray[0];
    }
  }
}
