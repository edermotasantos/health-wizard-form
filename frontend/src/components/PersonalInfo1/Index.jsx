import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup } from '@mui/material';
import FormContext from '../../context/FormContext';
import Copyright from '../Copyright/Index';
import Next from '../Next/Index';
import Previous from '../Previous/Index';
import { Select, Typography, FormControl, InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';

const theme = createTheme();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 10,
    },
  },
};

const unidadeDAFederacao = [
  'Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)',
];

const genero = [
  "homem cisgênero",
  "mulher cisgênero",
  "homem transgênero",
  "mulher transgênero",
  "homem não-binário",
  "mulher não-binária",
];

function PersonalInfo1() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { setFormStatus } = useContext(FormContext);

  const {
    gender_id,
    cpf,
    rg,
    uf_id,
  } = newForm;

  const handleChange = ({ target: { value, name } }) => {
    setFormStatus('');
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
                <FormControl fullWidth>
                    <InputLabel id="genderId">Gênero</InputLabel>
                    <Select
                        labelId="genderId"
                        id="gender_id"
                        name="gender_id"
                        value={gender_id}
                        label="Gênero"
                        onChange={handleChange}
                        MenuProps={MenuProps}
                    >
                      { genero.map((gender, index) => (
                        <MenuItem key={index} value={index + 1}>{gender}</MenuItem>
                      ))}
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cpf"
                  label="CPF"
                  name="cpf"
                  autoComplete="given-cpf"
                  value={cpf}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-rg"
                  name="rg"
                  required
                  fullWidth
                  id="rg"
                  label="RG"
                  autoFocus
                  value={rg}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="rgUfId">UF</InputLabel>
                    <Select
                        labelId="rgUfId"
                        id="uf_id"
                        name="uf_id"
                        value={uf_id}
                        label="UF"
                        onChange={handleChange}
                    >
                      {unidadeDAFederacao.map((uf, index) => (
                        <MenuItem key={index} value={index + 1}>{uf}</MenuItem>
                      ))}
                    </Select>
                </FormControl>
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

export default PersonalInfo1;
