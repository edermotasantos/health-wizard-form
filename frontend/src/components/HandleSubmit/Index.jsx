import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import FormContext from '../../context/FormContext';
import { toRegisterPatient } from '../../services/endpointAPI';
import { messages } from '../../util/messages';

function HandleSubmit() {
  const { formattedForm } = useContext(FormContext);
  const { setFormStatus } = useContext(FormContext);

  const { setCurrentStep } = useContext(FormContext);

  const successMessage = () => setCurrentStep((prevState) => prevState + 1)

  const handleSubmit = async () => {
    const data = await toRegisterPatient(formattedForm);
    if (data.id === undefined) {
      const message = messages(data);
      setFormStatus(message);
    }
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
