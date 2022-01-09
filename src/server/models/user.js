/*
 * @file: file description
 * @author: your name
 * @Date: 2022-01-09 14:30:21
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 16:29:06
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: String,
  log_info: {
    email: String,
    username: String,
    password: String,
  },
  email_verified: String,
  create_data: Date
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;