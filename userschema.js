const mongoose = require('mongoose');
const validator = require('validator');

let firstSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Invalid email address'
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isStrongPassword(value),
      message: 'Invalid password. Password must be strong (min 8 chars, uppercase, lowercase, numbers, symbols).'
    }
  }

});

module.exports = mongoose.model('firstModel', firstSchema); // Model name is 'firstModel'