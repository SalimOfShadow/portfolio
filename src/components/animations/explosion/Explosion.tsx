import React, { useEffect, useState } from "react";
import "./explosion.css";
import explosionImage from "./explosion.gif";
import { motion } from "framer-motion";

type AnimationState = "active" | "inactive";

// TODO - ALIGN THE EXPLOSION

interface ExplosionProps {
  animationState: AnimationState;
  distance: string;
  key: number;
}
export const Explosion = (props: ExplosionProps) => {
  const [animationState, setAnimationState] = useState(props.animationState);

  useEffect(() => {
    if (animationState === "active") {
      const timeout = setTimeout(() => {
        setAnimationState("inactive");
      }, 1000); // Duration of the animation
      return () => clearTimeout(timeout); // Cleanup the timeout
    }
  }, [animationState]);

  // Generate a unique key for the GIF source to reset the animation
  const uniqueGifSource = `${explosionImage}?${Date.now()}`;
  return (
    <>
      {animationState === "active" && (
        <div className="explosion" style={{ marginLeft: props.distance }}>
          <motion.div>
            <img
              src={uniqueGifSource} // Append query string to make the browser reload the GIF
              alt="Fire-ring"
              className="explosion-img"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};
