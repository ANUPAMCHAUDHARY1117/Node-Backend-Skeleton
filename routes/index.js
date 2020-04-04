const express = require('express');
const router = express.Router();
const User = require('./controllers/user/index');

router.post('/signup', User.create);
router.get('/find', User.find);
router.post('/login', User.login);

module.exports = router;
