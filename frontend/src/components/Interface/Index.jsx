import React, { useContext } from 'react';
import PersonalInfo1 from '../PersonalInfo1/Index';
import PersonalInfo2 from '../PersonalInfo2/Index';
import BasicInfo from '../BasicInfo/Index';
import FormContext from '../../context/FormContext';
import PatientList from '../PatientList/Index.jsx';
import PatientData from '../PatientData/Index';
import UserRegisteredSuccessfully from '../PatientRegisteredSuccessfully/Index';
import MedicalInsuranceInfo from '../MedicalInsuranceInfo/Index'
import UserLogin from '../UserLogin/Index';

function Interface() {
  const { currentStep } = useContext(FormContext);
  const renderComponent = {
    0: <UserLogin />,
    1: <BasicInfo />,
    2: <PersonalInfo1 />,
    3: <PersonalInfo2 />,
    4: <MedicalInsuranceInfo />,
    5: <UserRegisteredSuccessfully />,
    6: <PatientList />,
    7: <PatientData />,
  };

  return (
    <form>
      {renderComponent[currentStep]}
    </form>
  );
}

export default Interface;
