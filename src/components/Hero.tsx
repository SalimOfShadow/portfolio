import * as React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Heading from './Heading';
import socials from '../content/socials';
import Typewriter from 'typewriter-effect';

interface HeroProps {
  img: string;
  description: string;
  title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="profile-container">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
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
};
