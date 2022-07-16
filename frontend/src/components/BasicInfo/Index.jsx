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
    birth_date,
  } = newForm;

  const nameFieldIsFilled = () => {
    return (first_name && last_name);
  };

  const birthDateLength = () => {
    console.log((birth_date.length === 8));
    return ((birth_date.length === 8));
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

    if (birthDateLength()) {
      const stringBirthDateValue =  birth_date.toString();
      console.log(stringBirthDateValue);
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-birth_date"
                  name="birth_date"
                  required
                  fullWidth
                  id="birth_date"
                  label="Data de Nascimento"
                  autoFocus
                  value={birth_date}
                  onChange={handleChange}
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
