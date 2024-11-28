import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import runningGif from '../../../assets/characters-gif/kyo-running.gif';
import standingGif from '../../../assets/characters-gif/kyo-winpose.gif';
import winposeGif from '../../../assets/characters-gif/kyo-winpose.gif';
import './kyo.css';
import { useEffect } from 'react';
type KyoState = 'running' | 'standing' | 'winpose';

interface KyoProp {
  state: KyoState;
}

export const CharacterKyo = (props: KyoProp) => {
  const [state, setState] = useState<KyoState>(props.state);
  // Set interval to 2 seconds
  // React state to manage Kyo's state
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

  return (
    <div className="kyo-character">
      {/* Display the character GIF */}
      <motion.div>
        <img src={getGif()} alt={`Kyo is ${state}`} className="kyo-image" />
      </motion.div>

      {/* Buttons to change state */}
      <div>
        <button onClick={() => setState('standing')}>Standing</button>
        <button onClick={() => setState('running')}>Running</button>
        <button onClick={() => setState('winpose')}>Winpose</button>
      </div>
    </div>
  );
};
