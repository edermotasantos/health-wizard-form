import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import UserData from '../components/UserData/Index';

function User() {
  return (
    <FormProvider>
      <Header />
      <UserData />
    </FormProvider>
  );
}

export default User;
