import React, { useEffect } from "react";
import "./fire-ring.css";
import fireRingImage from "./fire-ring.gif";
import { motion } from "framer-motion";
export const FireRing = (props: any) => {
  return (
    <div className="fire-ring">
      <motion.div>
        <img src={fireRingImage} alt={`Fire-ring`} className="fire-ring-img" />
      </motion.div>
    </div>
  );
};
