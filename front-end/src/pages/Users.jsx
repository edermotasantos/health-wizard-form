import React from 'react';
import Header from '../components/Header/Index';
import FormProvider from '../context/FormProvider';
import UserList from '../components/UserList/Index';

function User() {
  return (
    <FormProvider>
      <Header />
      <UserList />
    </FormProvider>
  );
}

export default User;
