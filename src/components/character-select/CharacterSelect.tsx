import * as React from "react";
import { Grid } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import { Paper } from "@mui/material"; // Used for the outer box (Paper component)

import kyoAvatar from "../../assets/characters-icon/kyo-icon.png";
import ioriAvatar from "../../assets/characters-icon/iori-icon.png";
import kulaAvatar from "../../assets/characters-icon/kula-icon.png";
import { useTheme } from "../../contexts/ThemeContext";

import "./character-select.css";
import { CharacterName } from "../animations/character/Character";

const CharacterSelect = (props: {
  changeCharacterFunction: (characterName: CharacterName) => void;
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="character-select-container">
      {/* Outer Box */}
      <Paper
        elevation={3}
        sx={{
          padding: 3.3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(20, 24, 28, 0.8)",
          height: "50px",
        }}
        style={{ borderRadius: "25px" }}
      >
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Avatar
              className="character-icon"
              src={kyoAvatar}
              onClick={() => {
                props.changeCharacterFunction("kyo");
              }}
            ></Avatar>
          </Grid>
          <Grid item>
            <Avatar
              className="character-icon"
              src={ioriAvatar}
              onClick={() => {
                props.changeCharacterFunction("iori");
              }}
            ></Avatar>
          </Grid>
          <Grid item>
            <Avatar
              className="character-icon"
              src={kulaAvatar}
              onClick={() => {
                props.changeCharacterFunction("kula");
              }}
            ></Avatar>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CharacterSelect;
