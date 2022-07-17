import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import UserLogin from '../components/UserLogin/Index';

function User() {
  return (
    <FormProvider>
      <Header />
      <UserLogin />
    </FormProvider>
  );
}

export default User;
