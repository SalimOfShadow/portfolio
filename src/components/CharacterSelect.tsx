import * as React from 'react';
import { Grid } from '@mui/joy';
import Avatar from '@mui/joy/Avatar';
import { Paper } from '@mui/material'; // Used for the outer box (Paper component)

const CharacterSelect = () => {
  return (
    <div className="character-select-container">
      {/* Outer Box */}
      <Paper
        elevation={3}
        sx={{
          padding: 3.3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(20, 24, 28, 0.8)',
          height: '60px',
        }}
        style={{ borderRadius: '25px' }}
      >
        <Grid container justifyContent="center" spacing={2}>
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
