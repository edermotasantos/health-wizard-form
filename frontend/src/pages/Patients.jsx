import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import PatientList from '../components/PatientList/Index';

function User() {
  return (
    <FormProvider>
      <Header />
      <PatientList />
    </FormProvider>
  );
}

export default User;
