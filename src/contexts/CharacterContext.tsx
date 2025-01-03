import * as React from 'react';
import { useState, createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';

// Defining the possible character states
export type CharacterState =
  | 'running'
  | 'standing'
  | 'neomax'
  | 'final'
  | 'running-back';

// Defining the possible character names
export type CharacterName = 'kyo' | 'iori' | 'kula';

const characterArray: CharacterName[] = ['kyo', 'iori', 'kula'];

interface CharacterProviderProps {
  children: React.ReactNode;
}

// Create the CharacterContext
const CharacterContext = createContext({
  characterName: 'kyo' as CharacterName,
  setCharacterName: (name: CharacterName) => {},
  characterState: 'running' as CharacterState,
  setCharacterState: (state: CharacterState) => {},
});

// CharacterProvider Component
const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [cookies, setCookie] = useCookies(['character']);
  const [theme, setTheme] = useState<CharacterName>(
    characterArray[
      (characterArray.indexOf(cookies.character) + 1) % characterArray.length
    ] || 'kyo'
  );
  const [characterName, setCharacterName] = useState<CharacterName>('kyo');
  const [characterState, setCharacterState] =
    useState<CharacterState>('running');
  // Function to update the character name with validation

  const updateCharacterName = (newName: CharacterName) => {
    setCharacterName(newName);
    setCookie('character', newName, { path: '/' }); // TODO - FIX THIS
  };
  const updateCharacterState = (newState: CharacterState) => {
    setCharacterState(newState);
  };

  return (
    <CharacterContext.Provider
      value={{
        characterName,
        setCharacterName: updateCharacterName,
        characterState,
        setCharacterState: updateCharacterState,
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
