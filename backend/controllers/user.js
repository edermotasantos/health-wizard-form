const userService = require('../services/user');

const { tryAgainLater } = require('../schemas/messages');

const { OK, CREATED, INTERNAL_SERVER_ERROR } = require('../schemas/statusCodes');

const createUser = async (req, res) => {
  try {
    const { password, name } = req.body;
    const userData = await userService.createUser({ password, name });
    if (userData.err) {
      const { statusCode, message } = userData.err;
      return res.status(statusCode).json({ message });
    }
    return res.status(CREATED).json(userData);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: tryAgainLater });
  }
};

const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const loginData = await userService.login({ name, password });
    if (loginData.err) {
      console.log(loginData.err);
      const { statusCode, message } = loginData.err;
      return res.status(statusCode).json({ message });
    }
    return res.status(OK).json(loginData);
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: tryAgainLater });
  }
};

const listAllUsers = async (req, res) => {
  try {
      const foundUsers = await userService.listAllUsers();
      return res.status(OK).json(foundUsers);
  } catch (err) {
      res.status(INTERNAL_SERVER_ERROR).json({ message: tryAgainLater });
  }
};

const listUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUserById = await userService.listUserById(id);
    if (foundUserById.err) {
      const { statusCode, message } = foundUserById.err;
      return res.status(statusCode).json({ message });
    }
    return res.status(OK).json(foundUserById);
  } catch (err) {
      res.status(INTERNAL_SERVER_ERROR).json({ message: tryAgainLater });
  }
};

module.exports = {
  createUser,
  login,
  listAllUsers,
  listUserById,
};
