import React, { useEffect, useState } from "react";
import "./breath.css";
import breathImage from "./breath.gif";
import { motion } from "framer-motion";
type BreathState = "active" | "inactive";

type BreathProps = {
  animationState: BreathState;
};

export const Breath = (props: BreathProps) => {
  const [animationState, setAnimationState] = useState<BreathState>(
    props.animationState
  );
  const [breathActive, setBreathActive] = useState<boolean>(false);

  useEffect(() => {
    if (!breathActive) {
      setTimeout(() => {
        setBreathActive(true);
      }, 200);
    } else {
      return;
    }
  }, [breathActive]);
  if (animationState === "active") {
    setTimeout(() => {
      setAnimationState("inactive");
    }, 12132300);
  }

  return (
    <>
      {breathActive === true && (
        <div className="breath">
          <motion.div>
            <img src={breathImage} alt="breath" className="breath-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
