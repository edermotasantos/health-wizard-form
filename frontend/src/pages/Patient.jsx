import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import PatientData from '../components/PatientData/Index';

function User() {
  return (
    <FormProvider>
      <Header />
      <PatientData />
    </FormProvider>
  );
}

export default User;
