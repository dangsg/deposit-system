const { User } = require('../models');

const depositBalance = async (username, amount) => {
  return await User.findOneAndUpdate(
    { username },
    { $inc: { balance: amount } },
    { new: true }
  );
};

/**
 * Withdraw function: Return null if amount is lt current balance
 * @param {*} username
 * @param {*} amount
 * @returns
 */
const withdrawBalance = async (username, amount) => {
  return await User.findOneAndUpdate(
    { username, balance: { $gte: amount } },
    { $inc: { balance: -amount } },
    { new: true }
  );
};

module.exports = { depositBalance, withdrawBalance };
