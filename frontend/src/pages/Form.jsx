import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import Interface from '../components/Interface/Index';
import Footer from '../components/Footer/Index';

function Form() {
  return (
    <FormProvider>
      <Header />
      <Interface />
      <Footer />
    </FormProvider>
  );
}

export default Form;
