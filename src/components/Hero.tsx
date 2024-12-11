import * as React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Heading from './Heading';
import socials from '../content/socials';
import Typewriter from 'typewriter-effect';

export type PfpAnimation = 'idle' | 'quake' | 'blood' | 'frozen';

interface HeroProps {
  img: string;
  description: string;
  title: string;
  status: PfpAnimation;
}

const Hero = (props: HeroProps) => {
  const [quakeStatus, setQuakeStatus] = React.useState<string>(props.status);

  const quakeAnimation = {
    quake: {
      x: [0, -5, 5, -5, 5, 0],
      y: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.6, repeat: Infinity },
      scale: 1,
    },
    still: {
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  return (
    <div className="profile-container">
      <motion.div
        initial={{ scale: 0 }}
        animate={quakeStatus === 'quake' ? 'quake' : 'still'}
        variants={quakeAnimation}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 1.1,
          borderRadius: '100%',
        }}
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
