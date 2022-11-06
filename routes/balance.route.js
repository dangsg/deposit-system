const express = require('express');
const { balanceHandler } = require('../handlers');
const verifyAuthToken = require('../middlewares/authorization');
const router = express.Router();

router.post('/balance/deposit', verifyAuthToken, balanceHandler.deposit);
router.post('/balance/withdraw', verifyAuthToken, balanceHandler.withdraw);

module.exports = router;
