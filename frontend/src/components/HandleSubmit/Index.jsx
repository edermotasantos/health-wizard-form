import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import FormContext from '../../context/FormContext';
import { toRegisterPatient } from '../../services/endpointAPI';

function HandleSubmit() {
  const { formattedForm } = useContext(FormContext);
  const { setFormStatus } = useContext(FormContext);

  const { setCurrentStep } = useContext(FormContext);

  const successMessage = () => setCurrentStep((prevState) => prevState + 1)

  const messages = (data) => {
    const message = JSON.parse(data.request.response).message;
    if (message === '"user id" is required') {
      setFormStatus('Por favor, preencha todos os campos');
    }
    if (message === '"medical insurance card" is required') {
      setFormStatus('Por favor, preencha a cateirinha do convênio corretamente');
    }
    if (message === 'Patient already registered') {
      setFormStatus('CPF do usuário já se encontra cadastrado');
    }
    if (message === '"name" length must be at least 8 characters long') {
      setFormStatus('Por favor, preencha o nome completo');
    }
  }

  const handleSubmit = async () => {
    const data = await toRegisterPatient(formattedForm);
    if (data.id === undefined) messages(data);
    if (data.id !== undefined) successMessage();
  };

  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={handleSubmit}
      color="success"
    >
      Enviar
    </Button>
  );
}

export default HandleSubmit;
