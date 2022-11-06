const {
  depositBalance,
  withdrawBalance,
} = require('../services/balance.service');

const deposit = async (req, res) => {
  const result = await depositBalance(req.ctx.username, req.body.amount);
  return res.json({
    message: 'Deposit successfully!',
    data: { balance: result.balance },
  });
};

const withdraw = async (req, res) => {
  const result = await withdrawBalance(req.ctx.username, req.body.amount);
  if (result == null) {
    return res.json({
      message:
        'Withdraw failed: Withdrawal amount is greater than curren balance',
    });
  }

  return res.json({
    message: 'Withdraw successfully!',
    data: { balance: result.balance },
  });
};

module.exports = { deposit, withdraw };
