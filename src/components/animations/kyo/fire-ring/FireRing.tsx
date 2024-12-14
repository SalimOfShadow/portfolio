import React, { useState } from "react";
import "./fire-ring.css";
import fireRingImage from "./fire-ring.gif";
import { motion } from "framer-motion";
import { Projectile } from "../projectile/Projectile";
import projectileInitialExplosion from "../projectile/projectile-initial.gif";
type FireRingState = "active" | "inactive";

type FireRingProps = {
  animationState: FireRingState;
};

export const FireRing = (props: FireRingProps) => {
  const [animationState, setAnimationState] = useState<FireRingState>(
    props.animationState
  );
  const [projectileActive, setProjectileActive] = useState<boolean>(false);
  const [projectileSpark, setProjectileSpark] = useState<boolean>(false);
  if (animationState === "active") {
    setTimeout(() => {
      setProjectileActive(true);
    }, 1000);
    setTimeout(() => {
      setProjectileSpark(true);
      setTimeout(() => {
        setProjectileSpark(false);
      }, 400);
    }, 980);
    setTimeout(() => {
      setAnimationState("inactive");
      setProjectileActive(false);
    }, 1800);
  }
  return (
    <>
      {animationState === "active" && (
        <div className="fire-ring">
          {projectileActive && (
            <motion.div
              initial={{ x: 540, y: 50 }}
              animate={{ x: 1000 }} // Move 300px to the right
              transition={{ duration: 0.8 }} // 1-second animation
            >
              <Projectile animationState={"active"} />
            </motion.div>
          )}
          <motion.div>
            <img
              src={fireRingImage}
              alt="Fire-ring"
              className="fire-ring-img"
            />
          </motion.div>
          {projectileSpark && (
            <img
              className="projectile-initial"
              src={projectileInitialExplosion}
            ></img>
          )}
        </div>
      )}
    </>
  );
};
