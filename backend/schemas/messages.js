const {
    BAD_REQUEST,
    CONFLICT,
    UNAUTHORIZED,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
} = require('./statusCodes');

  const messages = {
    400: {
      nameLength: '"name" length must be at least 8 characters long',
      passwordLength: '"password" length must be 6 characters long',
      cpfLength: '"CPF" length must be at least 11 characters long',
      emailIsRequired: '"email" is required',
      passwordIsRequired: '"password" is required',
      nameIsRequired: '"name" is required',
      invalidEmail: '"email" must be a valid email',
      emailEmpty: '"email" is not allowed to be empty',
      passwordEmpty: '"password" is not allowed to be empty',
      invalidFields: 'Invalid fields',
      userIdIsRequired: '"user id" is required',
      medicalRecordIsRequired: '"medical record" is required',
      firstNameIsRequired: '"first name" is required',
      lastNameIsRequired: '"last name" is required',
      birthDateIsRequired: '" birth date" is required',
      genderIdIsRequired: '"gender id" is required',
      cpfIsRequired: '"CPF" is required',
      rgIsRequired: '"RG" is required',
      ufIdIsRequired: '"UF" is required',
      atLeastOneIsRequired: 'At least a "phone" is required',
      medicalInsuranceIdIsRequired: '"medical insurance id" is required',
      medicalInsuranceCardIsRequired: '"medical insurance card" is required',
      cardExpirationDateIsRequired: '"card expiration date" is required',
    },
    401: {
      tokenNotFound: 'Token not found',
      invalidToken: 'Expired or invalid token',
      unauthorizedUser: 'Unauthorized user',
    },
    404: {
      userDoesntExist: 'User does not exist',
      productDoesntExist: 'Product does not exist',
    },  
    409: {
      userAlreadyExists: 'User already registered',
      patientAlreadyExists: 'Patient already registered',

    },
    500: {
      tryAgainLater: 'Something went wrong. Try again later',
    },
  };
  
  const {
      nameLength,
      cpfLength,
      passwordLength,
      emailIsRequired,
      passwordIsRequired,
      nameIsRequired,
      invalidEmail,
      emailEmpty,
      passwordEmpty,
      invalidFields,
      userIdIsRequired,
      medicalRecordIsRequired,
      firstNameIsRequired,
      lastNameIsRequired,
      birthDateIsRequired,
      genderIdIsRequired,
      cpfIsRequired,
      rgIsRequired,
      ufIdIsRequired,
      atLeastOneIsRequired,
      medicalInsuranceIdIsRequired,
      medicalInsuranceCardIsRequired,
      cardExpirationDateIsRequired,
  } = messages[BAD_REQUEST];
  
    const { userDoesntExist, productDoesntExist } = messages[NOT_FOUND];
  
    const { userAlreadyExists, patientAlreadyExists } = messages[CONFLICT];
  
    const { tokenNotFound, invalidToken, unauthorizedUser } = messages[UNAUTHORIZED];
  
    const { tryAgainLater } = messages[INTERNAL_SERVER_ERROR];
  
  module.exports = {
    nameLength,
    passwordLength,
    cpfLength,
    emailIsRequired,
    passwordIsRequired,
    nameIsRequired,
    invalidEmail,
    emailEmpty,
    passwordEmpty,
    invalidFields,
    userAlreadyExists,
    tokenNotFound,
    invalidToken,
    userDoesntExist,
    tryAgainLater,
    productDoesntExist,
    unauthorizedUser,
    userIdIsRequired,
    medicalRecordIsRequired,
    firstNameIsRequired,
    lastNameIsRequired,
    birthDateIsRequired,
    genderIdIsRequired,
    cpfIsRequired,
    rgIsRequired,
    ufIdIsRequired,
    atLeastOneIsRequired,
    medicalInsuranceIdIsRequired,
    medicalInsuranceCardIsRequired,
    cardExpirationDateIsRequired,
    patientAlreadyExists,
  };
