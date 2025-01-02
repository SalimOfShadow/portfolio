import React, { useState } from "react";
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

  if (animationState === "active") {
    setTimeout(() => {
      setAnimationState("inactive");
    }, 300);
  }

  return (
    <>
      {animationState === "active" && (
        <div className="breath">
          <motion.div>
            <img src={breathImage} alt="breath" className="breath-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
