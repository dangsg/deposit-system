const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  }
);

module.exports = mongoose.model('User', userSchema);
