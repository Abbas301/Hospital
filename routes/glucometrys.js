const express = require('express');
const { Glucometry, validate } = require('../models/Glucometry');
const router = express.Router();

router.get('/', async (req, res) => {
    const patients = await Glucometry.find()
    res.send(patients)
})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let patient = new Glucometry({
        glucocard: req.body.glucocard,
        patientName: req.body.patientName,
        glucometer: req.body.glucometer,
        glucose: req.body.glucose
    })
    patient = await patient.save();
    res.send(patient);
})

module.exports = router;
