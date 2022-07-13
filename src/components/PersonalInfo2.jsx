import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Next from './Next';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Copyright from './Copyright';
import Previous from './Previous';

const theme = createTheme();

function PersonalInfo2() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box>
          <Typography component="h5" variant="h5">
            Personal Info 2
          </Typography>
          <Next />
          <Previous />
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default PersonalInfo2;
