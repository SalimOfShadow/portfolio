import React, { useState } from "react";
import "./fire-ring.css";
import fireRingImage from "./fire-ring.gif";
import { motion } from "framer-motion";

type FireRingState = "active" | "inactive";

type FireRingProps = {
  animationState: FireRingState;
};

export const FireRing = (props: FireRingProps) => {
  const [animationState, setAnimationState] = useState<FireRingState>(
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
        <div className="fire-ring">
          <motion.div>
            <img
              src={fireRingImage}
              alt="Fire-ring"
              className="fire-ring-img"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};
