import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { CharacterState } from "../contexts/CharacterContext";
import profileAnimation from "./animations/profile-picture/glow-effect.gif";
import "./animations/profile-picture/profile-animation.css";
export type PfpAnimation = "idle" | "quake" | "scratched" | "frozen";

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
  const [opacity, setOpacity] = useState<number>(0);
  const [brightness, setBrightness] = useState<string>("100%");

  let currentRotation: number = -360;

  useEffect(() => {
    if (props.characterState === "final") {
      setOpacity(1);
      setCanInteract(true);
    } else {
      setOpacity(0);
      setBrightness("100%");
      setTimeout(() => {
        setCanInteract(false);
      }, 400);
    }
  }, [props.characterState]);

  useEffect(() => {
    if (props.status === "quake") {
      setPfpStatus("quake");
      setTimeout(() => setPfpStatus("idle"), 1400);
    } else if (props.status === "scratched") {
      currentRotation -= 360;
      setPfpStatus("scratched");
      setTimeout(() => setPfpStatus("idle"), 1400);
    } else {
      setPfpStatus(props.status);
    }
  }, [props.status]);

  const animations = {
    idle: {
      x: 0,
      y: 0,
      rotate: currentRotation,
      scale: canInteract && opacity !== 0 ? 1.1 : 1, // If the avatar is interactable,and the glowing effect is active,then the scale should enlarge by a tiny bit
    },
    quake: {
      x: [0, -10, 10, -5, 5, 0],
      y: [0, -10, 5, 10, -5, 0],
      rotate: [
        currentRotation,
        currentRotation + 10,
        currentRotation + 20,
        currentRotation + 30,
        currentRotation + 20,
        currentRotation + 10,
        currentRotation,
        currentRotation - 10,
        currentRotation - 20,
        currentRotation - 30,
        currentRotation - 20,
        currentRotation - 10,
        currentRotation,
      ],
      transition: { duration: 0.32, repeat: Infinity, ease: "easeInOut" },
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
      y: [0, -80, -80, -80, -20, 0],
      rotate: [0, -360],
      transition: {
        duration: 1.15,
        ease: "easeInOut",
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
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={
          canInteract && opacity !== 0
            ? { scale: 1.2, filter: "brightness(115%)" }
            : { filter: `brightness(${brightness}) ` }
        }
        whileTap={
          canInteract
            ? {
                scale: 1.25,
                filter: "brightness(125%)",
              }
            : {}
        }
        className="pfp"
      >
        <img src={props.img} alt="" style={{ width: 150 }} />
        {canInteract && (
          <motion.div
            key="glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={profileAnimation}
              className="profile-glow-image"
              alt="Glow effect"
              style={{ opacity }}
            />
          </motion.div>
        )}
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
