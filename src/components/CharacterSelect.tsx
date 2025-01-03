import * as React from 'react';
import { Grid } from '@mui/joy';
import Avatar from '@mui/joy/Avatar';
import { Paper } from '@mui/material'; // Used for the outer box (Paper component)

const CharacterSelect = () => {
  return (
    <div>
      {/* Outer Box */}
      <Paper
        className="character-select-container"
        elevation={3}
        sx={{}}
        style={{ borderRadius: '25px' }}
      >
        <Grid spacing={2}>
          <Grid item>
            <Avatar>Kyo</Avatar>
          </Grid>
          <Grid item>
            <Avatar>Iori</Avatar>
          </Grid>
          <Grid item>
            <Avatar>Kula</Avatar>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CharacterSelect;
