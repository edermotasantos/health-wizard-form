import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import FormContext from '../../context/FormContext';
import { toRegisterPatient } from '../../services/endpointAPI';

function HandleSubmit() {
  const { formattedForm } = useContext(FormContext);
  const { setCurrentStep } = useContext(FormContext);

  const successMessage = () => setCurrentStep((prevState) => prevState + 1)

  const handleSubmit = async () => {
    const data = await toRegisterPatient(formattedForm);
    if (data !== undefined) successMessage();
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
