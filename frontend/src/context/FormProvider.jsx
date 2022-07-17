/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FormContext from './FormContext';

function FormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [newForm, setNewForm] = useState({
    user_id: 1,
    medical_record: '',
    first_name: '',
    last_name: '',
    full_name: '',
    birth_date: '',
    gender_id: '',
    cpf: '',
    rg: '',
    uf_id: '',
    email: '',
    mobile: '',
    phone: '',
    medical_insurance_id: '',
    medical_insurance_card: '',
    card_expiration_date: ''
  });
  const [dataList, setDataList] = useState([]);
  const [userPage, setUserPage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [formattedForm, setFormattedForm] = useState({});
  const [formattedShape, setFormattedShape] = useState({});
  const [userDataToLogin, setUserDataToLogin] = useState({
    nome: '',
    password: ''
  });

  const data = {
    currentStep,
    setCurrentStep,
    newForm,
    setNewForm,
    dataList,
    setDataList,
    userPage,
    setUserPage,
    isLoading,
    setIsLoading,
    formattedForm,
    setFormattedForm,
    formattedShape,
    setFormattedShape,
    userDataToLogin,
    setUserDataToLogin,
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
