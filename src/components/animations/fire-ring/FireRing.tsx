import React, { useState } from 'react';
import './fire-ring.css';
import fireRingImage from './fire-ring.gif';
import { motion } from 'framer-motion';
import { Projectile } from '../projectile/Projectile';

type FireRingState = 'active' | 'inactive';

type FireRingProps = {
  animationState: FireRingState;
};

export const FireRing = (props: FireRingProps) => {
  const [animationState, setAnimationState] = useState<FireRingState>(
    props.animationState
  );
  const [projectileActive, setProjectileActive] = useState<boolean>(false);

  if (animationState === 'active') {
    setTimeout(() => {
      setProjectileActive(true);
    }, 800);
    setTimeout(() => {
      setAnimationState('inactive');
    }, 1800);
  }
  return (
    <>
      {animationState === 'active' && (
        <div className="fire-ring">
          {projectileActive && (
            <motion.div
              initial={{ x: 320, y: 50 }}
              animate={{ x: 600 }} // Move 300px to the right
              transition={{ duration: 1.0 }} // 1-second animation
            >
              <Projectile animationState={'active'} />
            </motion.div>
          )}
          <motion.div>
            <img
              src={fireRingImage}
              alt="Fire-ring"
              className="fire-ring-img"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};
