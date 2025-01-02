import React, { useState } from "react";
import "./snowman.css";
import snowmanImage from "./snowman.gif";
import { motion } from "framer-motion";
type SnowmanState = "active" | "inactive";

type SnowmanProps = {
  animationState: SnowmanState;
};

export const Snowman = (props: SnowmanProps) => {
  const [animationState, setAnimationState] = useState<SnowmanState>(
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
        <div className="snowman">
          <motion.div>
            <img src={snowmanImage} alt="snowman" className="snowman-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
