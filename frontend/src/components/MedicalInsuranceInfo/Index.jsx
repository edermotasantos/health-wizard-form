import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import FormContext from '../../context/FormContext';
import Copyright from '../Copyright/Index';
import Previous from '../Previous/Index';

const theme = createTheme();

const convenio = [
  'Amil Assistência Médica',
  'Bradesco Seguros',
  'Central Nacional Unimed (CNU)',
  'GreenLine Sistema de Saúde',
  'NotreDame Intermédica',
  'SulAmérica',
];

function MedicalInsuranceInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);
  const { countUsersData } = useContext(FormContext);
  const {
    medical_insurance_id,
    medical_insurance_card,
    card_expiration_date
  } = newForm;

  const everyFieldIsFilled = () => Object.values(newForm).every((field) => field.length !== 0);
  const storeUserList = (stringStorage) => localStorage.setItem('lista_de_usuários', stringStorage);

  const fillForm = (name, value) => {
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const fillCardExpirationDate = (name, value) => {
    let newValue = value;
    if(card_expiration_date.length === 1) {
      newValue = value + '/'
      if(newValue.includes('//')) {
        newValue = card_expiration_date.substring(0,3);
      }
      if(newValue.includes('/') && (newValue.length === 1)) newValue = '';
    }
    if(newValue.length > 7) newValue = newValue.substring(0,7);
    fillForm(name, newValue);
  }

  const handleChange = ({ target: { value, name } }) => {
    if(name !== 'medical_insurance_card') fillForm(name, value);
    fillCardExpirationDate(name, value);

    setDataList((prevState) => ({
      ...prevState,
      [countUsersData]: newForm,
    }));

    if (everyFieldIsFilled()) {
      const stringStorage = JSON.stringify(dataList);
      storeUserList(stringStorage);
    }
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
              <FormControl fullWidth>
                    <InputLabel id="medicalInsuranceId">Convênio</InputLabel>
                    <Select
                        labelId="medicalInsuranceId"
                        id="medical_insurance_id"
                        name="medical_insurance_id"
                        value={medical_insurance_id}
                        label="Convênio"
                        onChange={handleChange}
                    >
                      { convenio.map((medicalInsurance, index) => (
                        <MenuItem key={index} value={index + 1}>{medicalInsurance}</MenuItem>
                      )) }
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-medical_insurance_card"
                  name="medical_insurance_card"
                  required
                  fullWidth
                  id="medical_insurance_card"
                  label="Carteirinha do Convênio"
                  autoFocus
                  value={medical_insurance_card}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-card_expiration_date"
                  name="card_expiration_date"
                  required
                  fullWidth
                  id="card_expiration_date"
                  label="Validade da carteirinha (mês/ano)"
                  autoFocus
                  value={card_expiration_date}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <ButtonGroup
              orientation="horizontal"
              fullWidth
            >
              <Previous />
            </ButtonGroup>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default MedicalInsuranceInfo;
