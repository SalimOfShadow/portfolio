import React, { useState } from "react";
import "./scratch-start.css";
import scratchStartImage from "./scratch-start.gif";
import { motion } from "framer-motion";
type ScratchStartState = "active" | "inactive";

type ScratchStartProps = {
  animationState: ScratchStartState;
};

export const ScratchStart = (props: ScratchStartProps) => {
  const [animationState, setAnimationState] = useState<ScratchStartState>(
    props.animationState
  );

  if (animationState === "active") {
    setTimeout(() => {
      setAnimationState("inactive");
    }, 1800);
  }
  return (
    <>
      {animationState === "active" && (
        <div className="scratch-start">
          <motion.div>
            <img
              src={scratchStartImage}
              alt="scratch-start"
              className="scratch-start-img"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};
