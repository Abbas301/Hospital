const mongoose = require('mongoose');
const Joi = require('joi');

const Hematology = mongoose.model('Hematology', new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    patientName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    bp: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    hemoglobin: {
        type: String,
        required: true
    }

}));

function validatePatient(patient) {
    const schema = {
        gender: Joi.string().min(3).max(50).required(),
        patientName: Joi.string().min(5).max(50).required(),
        bp: Joi.string().min(2).max(50).required(),
        hemoglobin: Joi.string().required()
    };
    return Joi.validate(patient, schema);
}

module.exports.Hematology = Hematology;
module.exports.validate = validatePatient;
