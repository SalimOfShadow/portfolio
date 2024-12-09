import React, { useState } from 'react';
import './trail.css';
import trailImage from './trail.gif';
import { motion } from 'framer-motion';

type TrailState = 'active' | 'inactive';

type TrailProps = {
  animationState: TrailState;
};

export const Trail = (props: TrailProps) => {
  const [animationState, setAnimationState] = useState<TrailState>(
    props.animationState
  );

  if (animationState === 'active') {
    setTimeout(() => {
      setAnimationState('inactive');
    }, 1800);
  }
  return (
    <>
      {animationState === 'active' && (
        <div className="trail">
          <motion.div>
            <img src={trailImage} alt="trail" className="trail-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
