const userService = require('../services/user');

const { tryAgainLater } = require('../schemas/messages');

const { OK, INTERNAL_SERVER_ERROR } = require('../schemas/statusCodes');

const login = async (req, res) => {
  try {
    const { password, name } = req.body;
    const userData = await userService.login({ password, name });
    if (userData.err) {
      const { statusCode, message } = userData.err;
      return res.status(statusCode).json({ message });
    }
    return res.status(OK).json(userData);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: tryAgainLater });
  }
};

module.exports = {
  login
};
