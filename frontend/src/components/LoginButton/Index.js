import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import FormContext from '../../context/FormContext';
import { doLogin } from '../../services/endpointAPI';
import { messages } from '../../util/messages';

function LoginButton() {
  const { setFormStatus } = useContext(FormContext);
  const { userDataToLogin } = useContext(FormContext);
  const { setCurrentStep } = useContext(FormContext);
  const { setAuth } = useContext(FormContext);

  const {
    nome,
    password,
  } = userDataToLogin;

  const handleChange = async () => {
    const data = await doLogin(nome, password);
    if (data.token) {
      setAuth(true);
      setCurrentStep((prevState) => prevState + 1);
      return
    }
    const message = messages(data);
    setFormStatus(message);
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
