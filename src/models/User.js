"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Missing username'],
    validate: {
      validator: (name) => name.length > 2,
      message: 'Username must be longer than 2 characters'
    }
  },
  password: {
    type: String,
    required: 'Missing password'
  }
});

// Create the model class
const ModelClass = mongoose.model('User', userSchema);

// Export the model
module.exports = ModelClass;
