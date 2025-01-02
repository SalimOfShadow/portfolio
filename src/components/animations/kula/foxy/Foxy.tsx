import React, { useEffect, useState } from "react";
import "./foxy.css";
import foxyImage from "./foxy.gif";
import { motion } from "framer-motion";
type FoxyState = "active" | "inactive";

type FoxyProps = {
  animationState: FoxyState;
};

export const Foxy = (props: FoxyProps) => {
  const [foxyActive, setFoxyActive] = useState<boolean>(false);

  useEffect(() => {
    if (!foxyActive) {
      setTimeout(() => {
        setFoxyActive(true);
      }, 300);
    }
  }, [foxyActive]);

  return (
    <>
      {foxyActive === true && (
        <div className="foxy">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={{ x: 360, opacity: 1 }}
          >
            <img src={foxyImage} alt="foxy" className="foxy-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
