import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormContext from '../../context/FormContext';
import { doLogin } from '../../services/endpointAPI';

function LoginButton() {
  const { userDataToLogin } = useContext(FormContext);
  const {
    nome,
    password,
  } = userDataToLogin;
  const navigate = useNavigate();

  const formPage = () =>  navigate('/form');

  const handleChange = async () => {
    const data = await doLogin(nome, password);
    if (data.token) formPage();
  };

  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={handleChange}
    >
      Entrar
    </Button>
  );
}

export default LoginButton;
