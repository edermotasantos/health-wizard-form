const jwt = require('jsonwebtoken');
const { user } = require('../models');
const {
  nameLength,
  passwordLength,
  passwordIsRequired,
  nameIsRequired,
  passwordEmpty,
  nameEmpty,
  invalidFields,
  userAlreadyExists,
  userDoesntExist,
} = require('../schemas/messages');

const { BAD_REQUEST, NOT_FOUND, CONFLICT } = require('../schemas/statusCodes');

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

const createUser = async ({password, name }) => {
  const userData = await validateUserData(password, name);
  if (userData) return userData;
  const checkNameLength = await validateNameLength(name);
  if (checkNameLength) return checkNameLength;
  const checkPasswordLength = await validatePasswordLength(password); 
  if (checkPasswordLength) return checkPasswordLength;
  const nameAlreadyExists = await user.findOne({ where: { name } });
  if (nameAlreadyExists) return { err: { statusCode: CONFLICT, message: userAlreadyExists } };
  const foundUser = await user.create({ password, name });
  const token = await createToken(foundUser, name);
  return { token };
};

const validateLoginData = (name, password) => {
  if (name === '') return { err: { statusCode: BAD_REQUEST, message: nameEmpty } };
  if (password === '') return { err: { statusCode: BAD_REQUEST, message: passwordEmpty } };
  if (!name) return { err: { statusCode: BAD_REQUEST, message: nameIsRequired } };
  if (!password) return { err: { statusCode: BAD_REQUEST, message: passwordIsRequired } };
};

const existentUser = (user, password) => {
  if (!user || user.password !== password) {
    return { err: { statusCode: BAD_REQUEST, message: invalidFields } };
  }
};

const login = async ({ name, password }) => {
  const loginData = validateLoginData(name, password);
  if (loginData) return loginData;
  const user = await user.findOne({ where: { name } });
  const nonExistentUser = existentUser(user, password);
  if (nonExistentUser) return nonExistentUser;
  const token = createToken(user, name);
  return { token };
};

const listAllUsers = async () => {
  const usersFound = await user.findAll({ raw: true });
  return usersFound;
};

const listUserById = async (id) => {
  const foundUserById = await user.findByPk(id, { raw: true });
  if (!foundUserById) {
    return { err: { statusCode: NOT_FOUND, message: userDoesntExist } };
  }
  return foundUserById;
};

module.exports = {
  createUser,
  login,
  listAllUsers,
  listUserById,
};
