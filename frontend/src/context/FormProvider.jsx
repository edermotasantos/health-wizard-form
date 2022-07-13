/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FormContext from './FormContext';

function FormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [newForm, setNewForm] = useState({
    medical_record: '',
    first_name: '',
    last_name: '',
    full_name: '',
    birth_day: '',
    gender: '',
    cpf: '',
    rg: '',
    rg_uf: '',
    email: '',
    mobile: '',
    phone: '',
    medical_insurance: '',
    medical_insurance_card: '',
    card_expiration_date: ''
  });
  const [usersArr, setUsersArr] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [countUsersData, setCountUsersData] = useState(0);
  const [userPage, setUserPage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const data = {
    currentStep,
    setCurrentStep,
    newForm,
    setNewForm,
    usersArr,
    setUsersArr,
    dataList,
    setDataList,
    countUsersData,
    setCountUsersData,
    userPage,
    setUserPage,
    isLoading,
    setIsLoading,
  };

  return (
    <FormContext.Provider value={data}>
      { children }
    </FormContext.Provider>
  );
}

FormContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormProvider;
