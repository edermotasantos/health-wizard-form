import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import PatientData from '../components/PatientData/Index';
import Footer from '../components/Footer/Index';

function User() {
  return (
    <FormProvider>
      <Header />
      <PatientData />
      <Footer />
    </FormProvider>
  );
}

export default User;
