import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormContext from '../../context/FormContext';
import Copyright from '../Copyright/Index';
import Next from '../Next/Index';

const theme = createTheme();

function BasicInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { setUsersArr } = useContext(FormContext);
  const { countUsersData } = useContext(FormContext);
  const {
    medical_record,
    first_name,
    last_name,
    birth_day,
  } = newForm;

  const nameFieldIsFilled = () => {
    return (first_name && last_name);
  };

  const handleChange = ({ target: { value, name } }) => {
    if (nameFieldIsFilled()) {
      const fullName = `${first_name} ${last_name}`;
      setUsersArr((prevState) => ({
        ...prevState,
        [countUsersData]: fullName,
      }));

      setNewForm((prevState) => ({
        ...prevState,
        full_name: fullName,
      }));
    }

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
                  autoComplete="given-medical_record"
                  name="medical_record"
                  required
                  fullWidth
                  id="medicalRecord"
                  label="Prontuário"
                  autoFocus
                  value={medical_record}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-first_name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                  value={first_name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-last_name"
                  name="last_name"
                  required
                  fullWidth
                  id="firstName"
                  label="Sobrenome"
                  autoFocus
                  value={last_name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-birth_day"
                  name="birth_day"
                  required
                  fullWidth
                  id="birth_day"
                  label="Data de Nascimento"
                  autoFocus
                  value={birth_day}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
            </Grid>
            <Next />
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default BasicInfo;
