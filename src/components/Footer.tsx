import * as React from 'react';
import {
  darkThemeStyles,
  themeShadows,
  useTheme,
} from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className="footer"
      style={{
        boxShadow: `0 8px 32px 0 ${themeShadows[theme]}`,
        marginTop: '20px',
      }}
    >
      <p>Salim Of Shadow KOF</p>
    </footer>
  );
};
export default Footer;
