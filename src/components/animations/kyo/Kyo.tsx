// CharacterKyo.tsx
import React, { useEffect } from "react";
import { useCharacter } from "../../../contexts/CharacterContext"; // Importing the custom hook
import runningGif from "../../../assets/characters-gif/kyo-running.gif";
import standingGif from "../../../assets/characters-gif/kyo-winpose.gif";
import neomaxGif from "../../../assets/characters-gif/kyo-neomax.gif";
import finalGif from "../../../assets/characters-gif/kyo-final.gif";
import "./kyo.css";
import { motion } from "framer-motion";
import { FireRing } from "../fire-ring/FireRing";
import { CharacterState } from "../../../contexts/CharacterContext";

interface CharacterKyoProps {
  characterState: CharacterState;
  setCharacterState: (state: CharacterState) => void;
}
// standing to final stutters...TODO : Fix this (extend the standing one a lot maybe?Add a loop animation every N time?)

export const CharacterKyo: React.FC<CharacterKyoProps> = ({
  characterState,
  setCharacterState,
}) => {
  // Function to determine the correct GIF based on the state
  const getGif = () => {
    switch (characterState) {
      case "running":
        return runningGif;
      case "neomax":
        return neomaxGif;
      case "standing":
        return standingGif;
      case "final":
        return finalGif;
      default:
        return standingGif; // Fallback to standing GIF
    }
  };

  // Log whenever the characterState changes
  useEffect(() => {
    if (characterState === "neomax")
      setTimeout(() => {
        setCharacterState("standing");
      }, 3200);
    if (characterState === "standing")
      setTimeout(() => {
        setCharacterState("final");
      }, 1200);
  }, [characterState]); // This will run when characterState changes

  return (
    <div className="kyo-character">
      {characterState === "neomax" && (
        <FireRing animationState="active"></FireRing>
      )}
      <motion.div>
        <img
          src={getGif()}
          alt={`Kyo is ${characterState}`}
          className="kyo-image"
        />
      </motion.div>
    </div>
  );
};
