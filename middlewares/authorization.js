const jwt = require('jsonwebtoken');

const secretKey = process.env.secretKey;

/**
 * Verify JWT authorization token
 */
const verifyAuthToken = (req, res, next) => {
  try {
    const authToken = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(authToken, secretKey);

    // Assign username to request context for later use
    const { username } = payload;
    console.log(username + ' has reached API');
    req.ctx = { username };

    next();
  } catch (error) {
    console.error(error);
    res.status(401).send('Unauthorized!');
  }
};

module.exports = verifyAuthToken;
