const jwt = require('jsonwebtoken');
const { user } = require('../models');
const {
  nameLength,
  passwordLength,
  passwordIsRequired,
  nameIsRequired,
} = require('../schemas/messages');

const { BAD_REQUEST } = require('../schemas/statusCodes');

const createToken = (user, name) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const { id } = user;
  const data = { id, name };
  const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

const validateNameLength = (name) => {
  if (name.length < 8) {
    return { err: { statusCode: BAD_REQUEST, message: nameLength } };
  }
};

const validatePasswordLength = (password) => {
  if (password.length < 6) {
    return { err: { statusCode: BAD_REQUEST, message: passwordLength } };
  }
};

const validateUserData = async (password, name) => {
  if (!password) return { err: { statusCode: BAD_REQUEST, message: passwordIsRequired } };
  if (!name) return { err: { statusCode: BAD_REQUEST, message: nameIsRequired } };
};

const login = async ({password, name }) => {
  const userData = await validateUserData(password, name);
  if (userData) return userData;
  const checkNameLength = await validateNameLength(name);
  if (checkNameLength) return checkNameLength;
  const checkPasswordLength = await validatePasswordLength(password); 
  if (checkPasswordLength) return checkPasswordLength;
  const nameAlreadyExists = await user.findOne({ where: { name } });
  const token = await createToken(nameAlreadyExists, name);
  return { token };
};

module.exports = {
  login,
};
