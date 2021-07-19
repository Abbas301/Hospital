const mongoose = require('mongoose');
const Joi = require('joi');

const Glucometry = mongoose.model('Glucometry', new mongoose.Schema({
    glucocard: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    patientName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    glucometer: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    glucose: {
        type: String,
        required: true
    }

}));

function validatePatient(patient) {
    const schema = {
        glucocard: Joi.string().min(1).max(50).required(),
        patientName: Joi.string().min(5).max(50).required(),
        glucometer: Joi.string().min(2).max(50).required(),
        glucose: Joi.string().required()
    };
    return Joi.validate(patient, schema);
}

module.exports.Glucometry = Glucometry;
module.exports.validate = validatePatient;
