import React from 'react';
import { Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Copyright from '../Copyright/Index';

const theme = createTheme();

function PatientRegisteredSuccessfully() {
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        <Typography sx={{ m: '1rem' }} variant="h4" component="div" gutterBottom>
            cadastro concluído com sucesso!
        </Typography>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Container>
    </ThemeProvider>
  );
}

export default PatientRegisteredSuccessfully;
