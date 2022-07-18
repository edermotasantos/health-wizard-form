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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

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
          <Typography component="h1" variant="h5" sx={{ mt: 5 }}>
            Health Wizard Form
          </Typography>
          <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
            Login
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              autoFocus
              autoComplete="given-nome"
              name="nome"
              required
              fullWidth
              id="nome"
              label="Nome"
              value={nome}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              type="password"
              autoComplete="current-password"
              name="password"
              required
              fullWidth
              id="password"
              label="Senha"
              autoFocus
              value={password}
              onChange={handleChange}
            />
            <Typography variant="poster" sx={{ color: 'orange', fontSize: '1.0rem' }} component="h6">
              { formStatus }
            </Typography>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <LoginButton />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UserLogin;
