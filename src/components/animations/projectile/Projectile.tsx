import React, { useState } from 'react';
import './projectile.css';
import projectileImage from './projectile.gif';
import { motion } from 'framer-motion';

type ProjectileState = 'active' | 'inactive';

type ProjectileProps = {
  animationState: ProjectileState;
};

export const Projectile = (props: ProjectileProps) => {
  const [animationState, setAnimationState] = useState<ProjectileState>(
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
        <div className="projectile">
          <motion.div>
            <img
              src={projectileImage}
              alt="projectile"
              className="projectile-img"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};
