// Character.tsx
import React, { useEffect } from "react";
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
// Kula
import kulaRunningGif from "../../../assets/characters-gif/kula/kula-running.gif";
import kulaStandingGif from "../../../assets/characters-gif/kula/kula-winpose.gif";
import kulaNeomaxGif from "../../../assets/characters-gif/kula/kula-neomax.gif";
import kulaFinalGif from "../../../assets/characters-gif/kula/kula-final.gif";

import "./character.css";
import { motion } from "framer-motion";
import { Scratch } from "../iori/scratch/Scratch";
import { Breath } from "../kula/breath/Breath";

export type CharacterName = "kyo" | "iori" | "kula";

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
    kyo: {
      running: kyoRunningGif,
      neomax: kyoNeomaxGif,
      standing: kyoStandingGif,
      final: kyoFinalGif,
      "running-back": kyoRunningGif,
    },
    iori: {
      running: ioriRunningGif,
      neomax: ioriNeomaxGif,
      standing: ioriStandingGif,
      final: ioriFinalGif,
      "running-back": ioriRunningGif,
    },
    kula: {
      running: kulaRunningGif,
      neomax: kulaNeomaxGif,
      standing: kulaStandingGif,
      final: kulaFinalGif,
      "running-back": kulaRunningGif,
    },
  };

  const getGif = (
    characterName: CharacterName,
    characterState: CharacterState
  ): string => {
    return gifs[characterName][characterState] || gifs[characterName].standing;
  };

  useEffect(() => {
    if (characterState === "standing")
      setTimeout(() => {
        setCharacterState("final");
      }, 1200);

    // Kyo's timing
    if (characterState === "neomax" && characterName === "kyo")
      setTimeout(() => {
        setCharacterState("standing");
      }, 3200);

    // Iori's timing
    if (characterState === "neomax" && characterName === "iori")
      setTimeout(() => {
        setCharacterState("standing");
      }, 1850); // 11

    // Kula's timing
    if (characterState === "neomax" && characterName === "kula")
      setTimeout(() => {
        setCharacterState("standing");
      }, 1250);
  }, [characterState]);

  return (
    <div
      className={characterName + "-character"}
      style={
        characterName === "iori" && characterState === "neomax"
          ? { top: "-35px" }
          : {}
      }
    >
      {/* Kyo's effect */}
      {characterState === "neomax" && characterName === "kyo" && (
        <FireRing animationState="active"></FireRing>
      )}

      {/* Iori's effect */}
      {characterState === "neomax" && characterName === "iori" && (
        <Scratch animationState="active" />
      )}

      {/* Kula's effect */}
      {characterState === "neomax" && characterName === "kula" && (
        <Breath animationState="active" />
      )}
      <motion.div>
        <img
          src={getGif(characterName, characterState)}
          alt={`Character is ${characterState}`}
          className={characterName + "-character-image"}
          style={{
            ...(characterState === "running-back" && {
              transform: "scaleX(-1)",
            }),
            ...(characterName === "iori" &&
              characterState === "neomax" && {
                width: "300px",
                height: "230px",
              }),
            ...(characterName === "kula" &&
              characterState === "final" && {
                transform: "translateX(20px)",
                height: "326px",
              }),
            ...(characterName === "kula" &&
              characterState === "standing" && {
                transform: "translateX(20px)",
                height: "326px",
              }),
          }}
        />
      </motion.div>
    </div>
  );
};
