import React, { useContext } from 'react';
import PersonalInfo1 from './PersonalInfo1';
import PersonalInfo2 from './PersonalInfo2';
import BasicInfo from './BasicInfo';
import FormContext from '../context/FormContext';
import UserList from './UserList.jsx';
import UserData from './UserData';
import UserRegisteredSuccessfully from './UserRegisteredSuccessfully';
import MedicalInsuranceInfo from './MedicalInsuranceInfo'

function Interface() {
  const { currentStep } = useContext(FormContext);
  const renderComponent = {
    1: <BasicInfo />,
    2: <PersonalInfo1 />,
    3: <PersonalInfo2 />,
    4: <MedicalInsuranceInfo />,
    5: <UserRegisteredSuccessfully />,
    6: <UserList />,
    7: <UserData />,
  };

  return (
    <form>
      {renderComponent[currentStep]}
    </form>
  );
}

export default Interface;
