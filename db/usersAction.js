const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    personalId: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    linkedinUrl: {
      type: String,
      lowercase: true, 
      unique: true
    }, 

    phone: {
      type: String,
      required: true
    }
  
  });

  userSchema.plugin(uniqueValidator);
  const usersAction = mongoose.model('users', userSchema);

module.exports = usersAction;