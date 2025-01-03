import * as React from "react";
import { useState, createContext, useContext } from "react";

// Defining the possible character states
export type CharacterState =
  | "running"
  | "standing"
  | "neomax"
  | "final"
  | "running-back";

// Defining the possible character names
export type CharacterName = "kyo" | "iori" | "kula";

interface CharacterProviderProps {
  children: React.ReactNode;
}

// Create the CharacterContext
const CharacterContext = createContext({
  characterName: "kyo" as CharacterName,
  setCharacterName: (name: CharacterName) => {},
});

// CharacterProvider Component
const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [characterName, setCharacterName] = useState<CharacterName>("kyo");

  // Function to update the character name with validation
  const updateCharacterName = (newName: CharacterName) => {
    setCharacterName(newName);
  };

  return (
    <CharacterContext.Provider
      value={{
        characterName,
        setCharacterName: updateCharacterName,
      }}
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
