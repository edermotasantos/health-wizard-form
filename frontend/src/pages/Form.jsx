import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import Interface from '../components/Interface/Index';

function Form() {
  return (
    <FormProvider>
      <Header />
      <Interface />
    </FormProvider>
  );
}

export default Form;
