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
import { fillBirthDate } from '../../util/dateFormatter';

const theme = createTheme();

function BasicInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { setFormattedForm } = useContext(FormContext);
  const { formattedShape, setFormattedShape } = useContext(FormContext);
  const { setFormStatus } = useContext(FormContext);
  
  const {
    medical_record,
    first_name,
    last_name,
    birth_date,
  } = newForm;

  const nameFieldIsFilled = () => {
    return (first_name && last_name);
  };

  const fillForm = (name, value) => {
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const dateFormatToSql = () => {
    const birthDate = birth_date
      .substring(6, birth_date.length) + birth_date
      .substring(2, 6) + birth_date.substring(0, 2);

    setFormattedShape((prevState) => ({
      ...prevState,
      ['birth_date']: birthDate,
    }));

    setFormattedForm((prevState) => ({
      ...prevState,
      ...newForm,
      ...formattedShape,
    }));
  }

  const handleChange = ({ target: { value, name } }) => {
    setFormStatus('');
    if(name !== 'birth_date') fillForm(name, value);
    if (nameFieldIsFilled()) {
      const fullName = `${first_name} ${last_name}`;
      fillForm('full_name', fullName);
    }
    if(name === 'birth_date') {
      const birthDateNewFormat = fillBirthDate(name, value, birth_date)
      fillForm(name, birthDateNewFormat);
    }
    if (birth_date.length === 10) dateFormatToSql();
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
