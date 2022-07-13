import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup } from '@mui/material';
import FormContext from '../context/FormContext';
import Copyright from './Copyright';
import Next from './Next';
import Previous from './Previous';

const theme = createTheme();

function PersonalInfo2() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { setCountField } = useContext(FormContext);

  const count = () => setCountField((prevState) => prevState + 1);

  const {
    email,
    mobile,
    phone,
  } = newForm;

  const handleChange = ({ target: { value, name } }) => {
    count();
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
            Dados do Usuário
          </Typography>
          <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  autoFocus
                  value={email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Celular"
                  name="mobile"
                  autoComplete="given-mobile"
                  value={mobile}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-phone"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Telefone"
                  autoFocus
                  value={phone}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
            </Grid>
            <ButtonGroup
              orientation="horizontal"
              fullWidth
            >
              <Previous />
              <Next />
            </ButtonGroup>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default PersonalInfo2;
