// CharacterKyo.tsx
import React, { useEffect } from 'react';
import { useCharacter } from '../../../contexts/CharacterContext'; // Importing the custom hook
import runningGif from '../../../assets/characters-gif/kyo-running.gif';
import standingGif from '../../../assets/characters-gif/kyo-winpose.gif';
import winposeGif from '../../../assets/characters-gif/kyo-winpose.gif';
import './kyo.css';
import { motion } from 'framer-motion';

export const CharacterKyo = ({ state, setState }) => {

  // Function to determine the correct GIF based on the state
  const getGif = () => {
    switch (state) {
      case 'running':
        return runningGif;
      case 'standing':
        return standingGif;
      case 'winpose':
        return winposeGif;
      default:
        return standingGif; // Fallback to standing GIF
    }
  };

  // Log whenever the characterState changes
  useEffect(() => {

    console.log('Updated characterState:', state); // Logs the updated state
  }, [state]); // This will run when characterState changes

  return (
    <div className="kyo-character">
      <motion.div>
        <img src={getGif()} alt={`Kyo is ${state}`} className="kyo-image" />
      </motion.div>
      <div>
        <button onClick={() => setState('standing')}>Standing</button>
        <button onClick={() => setState('running')}>Running</button>
        <button onClick={() => setState('winpose')}>Winpose</button>
      </div>
    </div>
  );
};
