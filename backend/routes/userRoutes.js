const router = require('express').Router();
const User = require('../controllers/user');

router.post('/', User.login);

module.exports = router;