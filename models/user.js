const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    role: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
}));

function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(250).required().email(),
        password: Joi.string().min(5).max(255).required(),
        role: Joi.string().min(3).max(50).required(),
      };
      return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;