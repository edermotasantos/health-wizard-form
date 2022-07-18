import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup } from '@mui/material';
import FormContext from '../../context/FormContext';
import Next from '../Next/Index';
import Previous from '../Previous/Index';

const theme = createTheme();

function PersonalInfo2() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { setFormStatus } = useContext(FormContext);
  const {
    email,
    mobile,
    phone,
  } = newForm;

  const fillForm = (name, value) => {
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const fillMobileField = (name, value) => {
    let newValue = value;
    if (mobile.length === 0 && (mobile < newValue)) newValue = '(' + value;
    if (mobile.length === 2 && (mobile < newValue)) newValue = value + ')';
    if (newValue.length === 9) {
      if(mobile > newValue) newValue = value.substring(0, value.length  );
      if(mobile < newValue) newValue = value + '-';
    }
    if(newValue.length > 14) newValue = newValue.substring(0,14);
    if(newValue.length === 13 && !newValue.includes(')')) {
      newValue = newValue.substring(0,4) + ')' + newValue.substring(4,9) + '-' + newValue.substring(9,13);
    }
    fillForm(name, newValue);
  }

  const fillPhoneField = (name, value) => {
    let newValue = value;
    if (phone.length === 0 && (phone < newValue)) newValue = '(' + value;
    if (phone.length === 2 && (phone < newValue)) newValue = value + ')';
    if (newValue.length === 8) {
      if(phone > newValue) newValue = value.substring(0, value.length  );
      if(phone < newValue) newValue = value + '-';
    }
    if(newValue.length > 13) newValue = newValue.substring(0,13);
    fillForm(name, newValue);
  }

  const handleChange = ({ target: { value, name } }) => {
    setFormStatus('');
    if(name !== 'mobile' || name !== 'phone') fillForm(name, value);
    if(name === 'mobile') fillMobileField(name, value);
    if(name === 'phone') fillPhoneField(name, value);
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
      </Container>
    </ThemeProvider>
  );
}

export default PersonalInfo2;
