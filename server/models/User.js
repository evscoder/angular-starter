const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true
  },
  smsCode: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('users', userSchema);
