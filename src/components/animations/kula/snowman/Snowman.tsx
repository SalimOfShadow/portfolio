import React, { useEffect, useState } from "react";
import "./snowman.css";
import snowmanImage from "./snowman.gif";
import { motion } from "framer-motion";
type SnowmanState = "active" | "inactive";

type SnowmanProps = {
  animationState: SnowmanState;
};

export const Snowman = (props: SnowmanProps) => {
  const [snowmanActive, setSnowmanActive] = useState<boolean>(false);

  useEffect(() => {
    if (!snowmanActive) {
      setTimeout(() => {
        setSnowmanActive(true);
      }, 300);
    }
  }, [snowmanActive]);

  return (
    <>
      {snowmanActive === true && (
        <div className="snowman">
          <motion.div>
            <img src={snowmanImage} alt="snowman" className="snowman-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
