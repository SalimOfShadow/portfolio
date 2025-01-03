import * as React from 'react';
import { Grid } from '@mui/joy';
import Avatar from '@mui/joy/Avatar';
import { Paper } from '@mui/material'; // Used for the outer box (Paper component)

import kyoAvatar from '../../assets/characters-icon/kyo-icon.png';
import ioriAvatar from '../../assets/characters-icon/iori-icon.png';
import kulaAvatar from '../../assets/characters-icon/kula-icon.png';
import { useTheme } from '../../contexts/ThemeContext';

import './character-select.css';
import { CharacterName } from '../animations/character/Character';
import { useState, useEffect } from 'react';
import { useCharacter } from '../../contexts/CharacterContext';

const CharacterSelect = (props: {
  changeCharacterFunction: (characterName: CharacterName) => void;
}) => {
  const { theme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const avatars = [
    { character: 'kyo', theme: 'blue', src: kyoAvatar },
    { character: 'iori', theme: 'red', src: ioriAvatar },
    { character: 'kula', theme: 'aqua', src: kulaAvatar },
  ];

  return (
    <div className="character-select-container">
      {avatars.map((avatar) => (
        <Avatar
          key={avatar.theme}
          className={`character-icon ${
            theme !== avatar.theme ? 'is-grayed' : ''
          }`}
          src={avatar.src}
          onClick={() => {
            props.changeCharacterFunction(avatar.character as CharacterName);
          }}
        />
      ))}
    </div>
  );
};

export default CharacterSelect;
