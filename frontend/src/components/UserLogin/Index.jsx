import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormContext from '../../context/FormContext';
import LoginButton from '../LoginButton/Index';

const theme = createTheme();

function UserLogin() {
  const { userDataToLogin, setUserDataToLogin } = useContext(FormContext);
  const { formStatus } = useContext(FormContext);
  const {
    nome,
    password,
  } = userDataToLogin;

  const handleChange = ({ target: { name, value} }) => {
    setUserDataToLogin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="div" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                    autoComplete="given-nome"
                    name="nome"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    autoFocus
                    value={nome}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-password"
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Senha"
                    autoFocus
                    value={password}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <LoginButton />
            </Box>
            <Typography variant="poster" sx={{ color: 'red', fontSize: '1.0rem' }} component="h6">
              { formStatus }
            </Typography>
          </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UserLogin;
