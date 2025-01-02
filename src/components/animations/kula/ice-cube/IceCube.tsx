import React, { useState } from "react";
import "./ice-cube.css";
import iceCubeImage from "./ice-cube.gif";
import { motion } from "framer-motion";
type IceCubeState = "active" | "inactive";

type IceCubeProps = {
  animationState: IceCubeState;
};

export const IceCube = (props: IceCubeProps) => {
  const [animationState, setAnimationState] = useState<IceCubeState>(
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
        <div className="ice-cube">
          <motion.div>
            <img src={iceCubeImage} alt="ice-cube" className="ice-cube-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
