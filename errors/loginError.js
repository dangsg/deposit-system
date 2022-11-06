class LoginError extends Error {
  constructor() {
    super('Wrong username or password!');
  }
}

module.exports = LoginError;
