import * as React from "react";
import { useState, createContext, useContext } from "react";

// Defining the possible character states
export type CharacterState =
  | "running"
  | "standing"
  | "neomax"
  | "final"
  | "running-back";

interface CharacterProviderProps {
  children: React.ReactNode;
}
// Create the CharacterContext
const CharacterContext = createContext({
  characterState: "standing" as CharacterState,
  setCharacterState: (state: CharacterState) => {},
});

// CharacterProvider Component
const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [characterState, setCharacterState] =
    useState<CharacterState>("running");

  // Function to directly set the character state to a given value
  const updateCharacterState = (newState: CharacterState) => {
    setCharacterState(newState);
  };

  return (
    <CharacterContext.Provider
      value={{ characterState, setCharacterState: updateCharacterState }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

// Custom hook to use the CharacterContext
const useCharacter = () => {
  return useContext(CharacterContext);
};

export { CharacterProvider, useCharacter };
