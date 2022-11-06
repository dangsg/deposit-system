const express = require('express');
const { userHandler } = require('../handlers');
const router = express.Router();

router.post('/user/login', userHandler.login);
router.post('/user/register', userHandler.register);

module.exports = router;
