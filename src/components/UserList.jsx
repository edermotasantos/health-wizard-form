import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Next from './Next';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Copyright from './Copyright';

const theme = createTheme();

function UserList() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box>
          <Typography component="h5" variant="h5">
            User List
          </Typography>
          <Next />
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UserList;
