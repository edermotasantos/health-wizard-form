import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import PatientList from '../components/PatientList/Index';
import Footer from '../components/Footer/Index';

function User() {
  return (
    <FormProvider>
      <Header />
      <PatientList />
      <Footer />
    </FormProvider>
  );
}

export default User;
