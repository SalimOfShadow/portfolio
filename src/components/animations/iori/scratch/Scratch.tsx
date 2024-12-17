import React, { useEffect, useState } from "react";
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

  const [sparkActive, setSparkActive] = useState<boolean>(false);
  const [sparkStartActive, setSparkStartActive] = useState<boolean>(false);
  if (!sparkActive) {
    setTimeout(() => {
      setSparkActive(true);
    }, 400);
  }

  useEffect(() => {
    if (sparkStartActive == false)
      setTimeout(() => {
        setSparkStartActive(true);
      }, 400);
    else {
      setTimeout(() => {
        setTimeout(() => {
          setSparkStartActive(false);
        }, 220);
      });
    }
  }, [sparkActive]);

  if (animationState === "active") {
    setTimeout(() => {
      setAnimationState("inactive");
    }, 1800);
  }
  return (
    <>
      {animationState === "active" && (
        <div className="scratch">
          {sparkActive == true && (
            <motion.div>
              <img src={scratchImage} alt="scratch" className="scratch-img" />
            </motion.div>
          )}
        </div>
      )}
      {sparkStartActive && (
        <ScratchStart animationState="active"></ScratchStart>
      )}
    </>
  );
};
