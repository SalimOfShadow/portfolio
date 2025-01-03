import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { ThemeProvider } from './contexts/ThemeContext.js';
import { CharacterProvider } from './contexts/CharacterContext.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CharacterProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CharacterProvider>
);
