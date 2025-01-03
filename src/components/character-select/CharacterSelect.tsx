import * as React from 'react';
import { Avatar } from '@mui/joy';
import { motion } from 'framer-motion';
import kyoAvatar from '../../assets/characters-icon/kyo-icon.png';
import ioriAvatar from '../../assets/characters-icon/iori-icon.png';
import kulaAvatar from '../../assets/characters-icon/kula-icon.png';
import { useTheme } from '../../contexts/ThemeContext';
import './character-select.css';
import { CharacterName } from '../animations/character/Character';
import { useState, useEffect } from 'react';
import { CharacterState, useCharacter } from '../../contexts/CharacterContext';

const avatars = [
  { character: 'kyo', theme: 'blue', src: kyoAvatar },
  { character: 'iori', theme: 'red', src: ioriAvatar },
  { character: 'kula', theme: 'aqua', src: kulaAvatar },
];

const CharacterSelect = (props: {
  changeCharacterFunction: (characterName: CharacterName) => void;
}) => {
  const { theme } = useTheme();

  const [canSwitchCharacter, setCanSwitchCharacter] = useState<boolean>(false);
  const { characterName, setCharacterName, characterState } = useCharacter();
  const [currentCharacter, setCurrentCharacter] = useState<CharacterName>(
    avatars.find((avatar) => avatar.theme === theme)?.character as CharacterName // Default to 'kyo' if no match
  );

  const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null); // Track hovered avatar

  useEffect(() => {
    if (characterState === 'final') {
      setCanSwitchCharacter(true);
    } else {
      setCanSwitchCharacter(false);
    }
  }, [characterState]); // Add dependency here

  useEffect(() => {
    const newCharacter: CharacterName = avatars.find(
      (avatar) => avatar.theme === theme
    )?.character as CharacterName;
    setCurrentCharacter(newCharacter); // Set the character based on the theme change
  }, [theme]); // Re-run whenever the theme changes

  const getBoxShadow = (character: string): string => {
    if (hoveredAvatar === character) {
      switch (character) {
        case 'kyo':
          return '0px 0px 6px 1px rgba(0, 0, 255, 0.7)'; // Blue for Kyo
        case 'iori':
          return '0px 0px 6px 1px rgba(255, 0, 0, 0.7)'; // Red for Iori
        case 'kula':
          return '0px 0px 6px 1px rgba(0, 255, 255, 0.7)'; // Aqua for Kula
        default:
          return ''; // No box shadow when not hovered
      }
    }
    return ''; // No box shadow by default
  };

  return (
    <div className="character-select-container">
      {avatars.map((avatar) => (
        <motion.div
          key={(Date.now() % 1000) + avatar.character}
          whileTap={
            canSwitchCharacter && avatar.character !== currentCharacter
              ? {
                  scale: 0.75,
                  boxShadow: undefined,
                }
              : {}
          }
          whileHover={
            canSwitchCharacter && avatar.character !== currentCharacter
              ? {
                  scale: 1.1,
                  filter: 'brightness(120%)',
                }
              : {}
          }
          transition={{ duration: 0.2 }}
          style={{
            pointerEvents: canSwitchCharacter ? 'auto' : 'none',
          }}
        >
          <Avatar
            className={`character-icon ${
              theme !== avatar.theme ? 'is-grayed' : ''
            }`}
            src={avatar.src}
            style={{
              pointerEvents: canSwitchCharacter ? 'auto' : 'none',
              boxShadow:
                avatar.character !== currentCharacter
                  ? getBoxShadow(avatar.character)
                  : undefined,
            }}
            onMouseEnter={() => setHoveredAvatar(avatar.character)} // Set hovered avatar
            onMouseLeave={() => setHoveredAvatar(null)} // Reset hover state
            onClick={() => {
              if (canSwitchCharacter && avatar.character !== currentCharacter) {
                props.changeCharacterFunction(
                  avatar.character as CharacterName
                );
              }
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CharacterSelect;
