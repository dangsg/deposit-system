// import * as userRouter from './user';
const userRouter = require('./user.route.js');
const balanceRouter = require('./balance.route.js');

module.exports = [userRouter, balanceRouter];
