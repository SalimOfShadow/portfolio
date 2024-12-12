import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";

export type PfpAnimation = "idle" | "quake" | "blood" | "frozen";

interface HeroProps {
  img: string;
  description: string;
  title: string;
  status: PfpAnimation;
}

const Hero = (props: HeroProps) => {
  const [pfpStatus, setPfpStatus] = useState<string>(props.status);

  useEffect(() => {
    console.log(props.status);
    setPfpStatus(props.status);
    if (props.status === "quake") {
      setTimeout(() => setPfpStatus("idle"), 1350);
    }
  }, [props.status]);

  const quakeAnimation = {
    quake: {
      x: [0, -10, 10, -5, 5, 0],
      y: [0, -10, 5, 10, -5, 0],
      rotate: [0, 10, 20, 30, 20, 10, 0, -10, -20, -30, -20, -10, 0],
      transition: { duration: 0.32, repeat: Infinity, ease: "easeInOut" },

      scale: 1,
    },
    idle: {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    },
  };

  return (
    <div className="profile-container">
      <motion.div
        initial={{ scale: 0 }}
        animate={pfpStatus}
        variants={quakeAnimation}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 1.1,
          borderRadius: "100%",
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
