const mongoose = require('mongoose');
const Joi = require('joi');

const Patient = mongoose.model('Patient', new mongoose.Schema({
    patientName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    id: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    date: {
        type: String,
        required: true
    },
    hematology: {
        type: String,
        required: false
    },
    glucometry: {
        type: String,
        required: false
    }

}));

function validatePatient(patient) {
    const schema = {
        patientName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        id: Joi.string().min(2).max(50).required(),
        date: Joi.string().required(),
        hematology: Joi.string(),
        glucometry: Joi.string()
    };
    return Joi.validate(patient, schema);
}

module.exports.Patient = Patient;
module.exports.validate = validatePatient;
