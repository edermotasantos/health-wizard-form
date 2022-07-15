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
      emailIsRequired: '"email" is required',
      passwordIsRequired: '"password" is required',
      displayNameIsRequired: '"displayName" is required',
      invalidEmail: '"email" must be a valid email',
      emailEmpty: '"email" is not allowed to be empty',
      passwordEmpty: '"password" is not allowed to be empty',
      invalidFields: 'Invalid fields',
      nameIsRequired: '"name" is required',
      titleIsRequired: '"title" is required',
      descriptionIsRequired: '"description" is required',
      priceIsRequired: '"description" is required',
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
    },
    500: {
      tryAgainLater: 'Something went wrong. Try again later',
    },
  };
  
  const {
      nameLength,
      passwordLength,
      emailIsRequired,
      passwordIsRequired,
      displayNameIsRequired,
      invalidEmail,
      emailEmpty,
      passwordEmpty,
      invalidFields,
      nameIsRequired,
      titleIsRequired,
      descriptionIsRequired,
      priceIsRequired,
  } = messages[BAD_REQUEST];
  
    const { userDoesntExist, productDoesntExist } = messages[NOT_FOUND];
  
    const { userAlreadyExists } = messages[CONFLICT];
  
    const { tokenNotFound, invalidToken, unauthorizedUser } = messages[UNAUTHORIZED];
  
    const { tryAgainLater } = messages[INTERNAL_SERVER_ERROR];
  
  module.exports = {
    nameLength,
    passwordLength,
    emailIsRequired,
    passwordIsRequired,
    displayNameIsRequired,
    invalidEmail,
    emailEmpty,
    passwordEmpty,
    invalidFields,
    userAlreadyExists,
    tokenNotFound,
    invalidToken,
    userDoesntExist,
    tryAgainLater,
    nameIsRequired,
    titleIsRequired,
    descriptionIsRequired,
    priceIsRequired,
    productDoesntExist,
    unauthorizedUser,
  };
