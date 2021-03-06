import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Next from '../Next/Index';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

const theme = createTheme();

function PatientList() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box>
          <Typography component="h5" variant="h5">
            User List
          </Typography>
          <Next />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default PatientList;
