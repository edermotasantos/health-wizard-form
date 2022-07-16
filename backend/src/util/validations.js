const {
  nameLength,
  cpfLength,
  userIdIsRequired,
  medicalRecordIsRequired,
  firstNameIsRequired,
  lastNameIsRequired,
  birthDateIsRequired,
  genderIdIsRequired,
  cpfIsRequired,
  rgIsRequired,
  ufIdIsRequired,
  emailIsRequired,
  atLeastOneIsRequired,
  medicalInsuranceIdIsRequired,
  medicalInsuranceCardIsRequired,
  cardExpirationDateIsRequired,
} = require('./messages');
  
const { BAD_REQUEST } = require('../util/statusCodes');
  
const validateNameLength = (name) => {
  if (name.length < 8) {
    return { err: { statusCode: BAD_REQUEST, message: nameLength } };
  }
};
  
const validateCPFLength = (cpf) => {
  if (cpf.length < 11) {
    return { err: { statusCode: BAD_REQUEST, message: cpfLength } };
  }
};
  
const validateFields = {
  checkUserId() {
    return { err: { statusCode: BAD_REQUEST, message: userIdIsRequired } };
  },
  checkMedicalRecord() {
    return { err: { statusCode: BAD_REQUEST, message: medicalRecordIsRequired } };
  },
  checkFirstName() {
    return { err: { statusCode: BAD_REQUEST, message: firstNameIsRequired } };
  },
  checkLastName() {
    return { err: { statusCode: BAD_REQUEST, message: lastNameIsRequired } };
  },
  checkBirthDate() {
    return { err: { statusCode: BAD_REQUEST, message: birthDateIsRequired } };
  },
  checkGenderId() {
    return { err: { statusCode: BAD_REQUEST, message: genderIdIsRequired } };
  },
  checkCPF() {
    return { err: { statusCode: BAD_REQUEST, message: cpfIsRequired } };
  },
  checkRG() {
    return { err: { statusCode: BAD_REQUEST, message: rgIsRequired } };
  },
  checkUFId() {
    return { err: { statusCode: BAD_REQUEST, message: ufIdIsRequired } };
  },
  checkEmail() {
    return { err: { statusCode: BAD_REQUEST, message: emailIsRequired } };
  },
  checkPhone() {
    return { err: { statusCode: BAD_REQUEST, message: atLeastOneIsRequired } };
  },
  checkMedicalInsuranceId() {
    return { err: { statusCode: BAD_REQUEST, message: medicalInsuranceIdIsRequired } };
  },
  checkMedicalInsuranceCard() {
    return { err: { statusCode: BAD_REQUEST, message: medicalInsuranceCardIsRequired } };
  },
  checkCardExpirationDate() {
    return { err: { statusCode: BAD_REQUEST, message: cardExpirationDateIsRequired } };
  },
};

module.exports = {
  validateNameLength,
  validateCPFLength,
  validateFields,
};
