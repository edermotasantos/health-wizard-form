import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import FormContext from '../context/FormContext';
import Copyright from './Copyright';
import Previous from './Previous';

const theme = createTheme();

function MedicalInsuranceInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);
  const { countUsersData } = useContext(FormContext);
  const { setCountField } = useContext(FormContext);
  const { selectedMedicalInsurance, setSelectedGMedicalInsurance } = useContext(FormContext);
  const {
    medical_insurance_card,
    card_expiration_date
  } = newForm;

  const count = () => setCountField((prevState) => prevState + 1);

  const handleChange = (e) => {
    const { target: { value, name } } = e;
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "medical_insurance") {
      setSelectedGMedicalInsurance(value);
    }
    setDataList((prevState) => ({
      ...prevState,
      [countUsersData]: newForm,
    }));

    count();
    const everyFieldIsFilled = Object.values(newForm).every((field) => field.length !== 0);

    if (everyFieldIsFilled === true) {
      const stringStorage = JSON.stringify(dataList);
      localStorage.setItem('lista_de_usuários', stringStorage);
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
                        id="medical_insurance"
                        name="medical_insurance"
                        value={selectedMedicalInsurance}
                        label="Convênio"
                        onChange={handleChange}
                    >
                      <MenuItem value="Amil Assistência Médica"> Amil Assistência Médica</MenuItem>
                      <MenuItem value="Bradesco Seguros">Bradesco Seguros</MenuItem>
                      <MenuItem value="Central Nacional Unimed (CNU)">Central Nacional Unimed (CNU)</MenuItem>
                      <MenuItem value="GreenLine Sistema de Saúde">GreenLine Sistema de Saúde</MenuItem>
                      <MenuItem value="NotreDame Intermédica">NotreDame Intermédica</MenuItem>
                      <MenuItem value="SulAmérica">SulAmérica</MenuItem>
                    </Select>
                </FormControl>
                {/* <TextField
                  autoComplete="given-medical_insurance"
                  name="medical_insurance"
                  required
                  fullWidth
                  id="medical_insurance"
                  label="Convênio"
                  autoFocus
                  value={medical_insurance}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                /> */}
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
                  onChange={(e) => {
                    handleChange(e);
                  }}
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
            </ButtonGroup>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default MedicalInsuranceInfo;
