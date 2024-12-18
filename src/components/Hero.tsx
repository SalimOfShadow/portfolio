import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CharacterState } from '../contexts/CharacterContext';

export type PfpAnimation = 'idle' | 'quake' | 'scratched' | 'frozen';

interface HeroProps {
  img: string;
  description: string;
  title: string;
  status: PfpAnimation;
  characterState: CharacterState;
}

const Hero = (props: HeroProps) => {
  const [pfpStatus, setPfpStatus] = useState<string>(props.status);
  const [canInteract, setCanInteract] = useState<boolean>(false);

  let currentRotation: number = -360; // used this variable to fix the profile picture snapping back

  useEffect(() => {
    if (props.characterState === 'final') {
      setCanInteract(true);
    } else {
      setTimeout(() => {
        setCanInteract(false);
      }, 400);
    }
  }, [props.characterState]);

  useEffect(() => {
    if (props.status === 'quake') {
      setPfpStatus('quake');
      setTimeout(() => setPfpStatus('idle'), 1400);
    } else if (props.status === 'scratched') {
      currentRotation -= 360;
      setPfpStatus('scratched');
      setTimeout(() => setPfpStatus('idle'), 1400);
    } else {
      setPfpStatus(props.status);
    }
  }, [props.status]); // Depend on props.status, not pfpStatus

  const animations = {
    idle: {
      x: 0,
      y: 0,
      rotate: currentRotation,
      scale: 1,
    },
    quake: {
      x: [0, -10, 10, -5, 5, 0],
      y: [0, -10, 5, 10, -5, 0],
      rotate: [0, 10, 20, 30, 20, 10, 0, -10, -20, -30, -20, -10, 0],
      transition: { duration: 0.32, repeat: Infinity, ease: 'easeInOut' },
      scale: 1,
    },
    scratched: {
      x: [
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0,
      ],
      y: [0, -80, -80, 0, 0, 0],
      rotate: [0, -360],
      transition: {
        duration: 1.15,
        ease: 'easeInOut',
      },
      scale: 1,
    },
  };

  return (
    <div className="profile-container">
      <motion.div
        initial={{ scale: 0 }}
        animate={pfpStatus}
        variants={animations}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={canInteract ? { scale: 1.2 } : {}}
        whileTap={
          canInteract
            ? {
                scale: 1.1,
                borderRadius: '100%',
              }
            : {}
        }
        className="pfp"
      >
        <img src={props.img} alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
