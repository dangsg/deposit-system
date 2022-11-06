const { registerUser, loginUser } = require('../services/user.service');
const { LoginError } = require('../errors');
const { MongoServerError } = require('mongodb');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Simple validate username and password
    if (
      username == null ||
      password == null ||
      username.length < 6 ||
      password.length < 6
    ) {
      return res.json({
        message:
          'Register failed: Username or password is too short (at least 6 characters)',
      });
    }

    const result = await registerUser(username, password);
    return res.json({
      message: 'User is created successfully!',
      data: { name: result.username, balance: result.balance },
    });
  } catch (error) {
    if (error instanceof MongoServerError) {
      return res.json({
        message:
          'Register failed: Username already exists, please choose another one',
      });
    }
  }
};

/**
 * Login function. Issue new JWT token on success.
 */
const login = async (req, res) => {
  try {
    const result = await loginUser(req.body.username, req.body.password);
    res.json({ message: 'Login successfully', data: { token: result } });
  } catch (error) {
    if (error instanceof LoginError) {
      res.json({ message: 'Login failed' });
    }
  }
};

module.exports = { register, login };
