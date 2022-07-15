const router = require('express').Router();
const User = require('../controllers/user');

router.post('/', User.createUser);
router.get('/', User.listAllUsers);
router.get('/:id', User.listUserById);
router.post('/login', User.login);

module.exports = router;