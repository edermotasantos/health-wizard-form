import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import FormContext from '../../context/FormContext';
import { doLogin } from '../../services/endpointAPI';

function LoginButton() {
  const { setFormStatus } = useContext(FormContext);
  const { userDataToLogin } = useContext(FormContext);
  const { setCurrentStep } = useContext(FormContext);
  const { setAuth } = useContext(FormContext);

  const {
    nome,
    password,
  } = userDataToLogin;

  const messages = (data) => {
    const message = JSON.parse(data.request.response).message;
    console.log(message);
    if (message === 'Something went wrong. Try again later') {
      setFormStatus('Usuário não cadastrado');
    }
    if (message === '"name" length must be at least 8 characters long') {
      setFormStatus('Verifique se o usuário está correto, nome precisa ter mínimo 8 caractéres');
    }
  }

  const handleChange = async () => {
    const data = await doLogin(nome, password);
    console.log(data);
    if (data.token) {
      setAuth(true);
      setCurrentStep((prevState) => prevState + 1);
      return
    }
    messages(data);
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
