import React, { useContext } from 'react';
import PersonalInfo1 from '../PersonalInfo1/Index';
import PersonalInfo2 from '../PersonalInfo2/Index';
import BasicInfo from '../BasicInfo/Index';
import FormContext from '../../context/FormContext';
import UserList from '../UserList/Index.jsx';
import UserData from '../UserData/Index';
import UserRegisteredSuccessfully from '../UserRegisteredSuccessfully/Index';
import MedicalInsuranceInfo from '../MedicalInsuranceInfo/Index'

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
