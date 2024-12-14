// Character.tsx
import React, { useEffect } from "react";
import { useCharacter } from "../../../contexts/CharacterContext"; // Importing the custom hook
import { CharacterState } from "../../../contexts/CharacterContext";
// Kyo
import kyoRunningGif from "../../../assets/characters-gif/kyo/kyo-running.gif";
import kyoStandingGif from "../../../assets/characters-gif/kyo/kyo-winpose.gif";
import kyoNeomaxGif from "../../../assets/characters-gif/kyo/kyo-neomax.gif";
import kyoFinalGif from "../../../assets/characters-gif/kyo/kyo-final.gif";
import { FireRing } from "../kyo/fire-ring/FireRing";
// Iori
import ioriRunningGif from "../../../assets/characters-gif/iori/iori-running.gif";
import ioriStandingGif from "../../../assets/characters-gif/iori/iori-winpose.gif";
import ioriNeomaxGif from "../../../assets/characters-gif/iori/iori-neomax.gif";
import ioriFinalGif from "../../../assets/characters-gif/iori/iori-final.gif";

import "./character.css";
import { motion } from "framer-motion";

export type CharacterName = "kyo" | "iori";

interface CharacterProps {
  characterName: CharacterName;
  characterState: CharacterState;
  setCharacterState: (state: CharacterState) => void;
}
export const Character: React.FC<CharacterProps> = ({
  characterState,
  setCharacterState,
  characterName,
}) => {
  const gifs: Record<CharacterName, Record<CharacterState, string>> = {
    iori: {
      running: ioriRunningGif,
      neomax: ioriNeomaxGif,
      standing: ioriStandingGif,
      final: ioriFinalGif,
      "running-back": ioriRunningGif,
    },
    kyo: {
      running: kyoRunningGif,
      neomax: kyoNeomaxGif,
      standing: kyoStandingGif,
      final: kyoFinalGif,
      "running-back": kyoRunningGif,
    },
  };

  const getGif = (
    characterName: CharacterName,
    characterState: CharacterState
  ): string => {
    // Use a fallback for invalid character states
    return gifs[characterName][characterState] || gifs[characterName].standing;
  };

  useEffect(() => {
    if (characterState === "neomax")
      setTimeout(() => {
        setCharacterState("standing");
      }, 3200);
    if (characterState === "standing")
      setTimeout(() => {
        setCharacterState("final");
      }, 1200);
  }, [characterState]);

  return (
    <div className="character">
      {characterState === "neomax" && (
        <FireRing animationState="active"></FireRing>
      )}
      <motion.div>
        <img
          src={getGif(characterName, characterState)}
          alt={`Kyo is ${characterState}`}
          className="character-image"
          style={
            characterState === "running-back"
              ? {
                  transform: "scaleX(-1)",
                }
              : undefined
          }
        />
      </motion.div>
    </div>
  );
};
