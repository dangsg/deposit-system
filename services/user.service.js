const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { LoginError } = require('../errors');
const saltRounds = parseInt(process.env.saltRounds);
const secretKey = process.env.secretKey;

const registerUser = async (username, password) => {
  // Encrypt password
  const hashPassword = await bcrypt.hash(password, saltRounds);
  const user = new User({ username, password: hashPassword });
  return await user.save();
};

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  // Verify if username is existed and password and hash are matched
  if (user == null || (await !bcrypt.compare(password, user.password))) {
    throw new LoginError();
  }
  // Issue new simple JWT token
  return jwt.sign({ username }, secretKey);
};

module.exports = { registerUser, loginUser };
