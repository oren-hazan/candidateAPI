const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    personalId: {
      type: String
    },

    email: {
      type: String,
      unique: true,
      default: null
    },

    linkedinUrl: {
      type: String,
      lowercase: true, 
      unique: true,
      default: null
    }, 

    phone: {
      type: String,
      default: null
    },

    rawData: {
      type: String
    },

    timestamp: { 
      type: Date
    }
  
  });

  module.exports = mongoose.model('User', userSchema);

