import React, { useState } from "react";
import "./scratch.css";
import scratchImage from "./scratch.gif";
import { motion } from "framer-motion";
import { ScratchStart } from "../scratch-start/ScratchStart";
type ScratchState = "active" | "inactive";

type ScratchProps = {
  animationState: ScratchState;
};

export const Scratch = (props: ScratchProps) => {
  const [animationState, setAnimationState] = useState<ScratchState>(
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
        <div className="scratch">
          <ScratchStart animationState="active"></ScratchStart>
          <motion.div>
            <img src={scratchImage} alt="scratch" className="scratch-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
