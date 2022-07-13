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

function PersonalInfo1() {
  const { newForm, setNewForm } = useContext(FormContext);

  const {
    gender,
    cpf,
    rg,
    rg_uf,
  } = newForm;

  const handleChange = ({ target: { value, name } }) => {
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
                        id="gender"
                        name="gender"
                        value={gender}
                        label="Gênero"
                        onChange={handleChange}
                    >
                      <MenuItem value="homem cisgênero">homem cisgênero</MenuItem>
                      <MenuItem value="mulher cisgênero">mulher cisgênero</MenuItem>
                      <MenuItem value="homem transgênero">homem transgênero</MenuItem>
                      <MenuItem value="mulher transgênero">mulher transgênero</MenuItem>
                      <MenuItem value="homem não-binário">homem não-binário</MenuItem>
                      <MenuItem value="mulher não-binária">mulher não-binária</MenuItem>
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
                  onChange={(e) => {
                    handleChange(e);
                  }}
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
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="rg_uf"
                  label="UF"
                  name="rg_uf"
                  autoComplete="given-rg_uf"
                  value={rg_uf}
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

export default PersonalInfo1;
