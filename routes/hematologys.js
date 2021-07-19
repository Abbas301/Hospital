const express = require('express');
const { Hematology, validate } = require('../models/hematology');
const router = express.Router();

router.get('/', async (req, res) => {
    const patients = await Hematology.find()
    res.send(patients)
})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let patient = new Hematology({
        gender: req.body.gender,
        patientName: req.body.patientName,
        bp: req.body.bp,
        hemoglobin: req.body.hemoglobin
    })
    patient = await patient.save();
    res.send(patient);
})

module.exports = router;
