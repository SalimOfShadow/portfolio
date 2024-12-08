import React, { useEffect } from "react";
import "./explosion.css";
import explosionImage from "./explosion.gif";
import { motion } from "framer-motion";
export const Explosion = (props: any) => {
  return (
    <div className="explosion">
      <motion.div>
        <img src={explosionImage} alt={`Fire-ring`} className="explosion-img" />
      </motion.div>
    </div>
  );
};
