const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    personalId: {
      type: String
    },

    email: {
      type: String,
      unique: true
    },

    linkedinUrl: {
      type: String,
      lowercase: true, 
      unique: true
    }, 

    phone: {
      type: String
    },

    timestamp: { 
      type: Date
    }
  
  });

  module.exports = mongoose.model('User', userSchema);

