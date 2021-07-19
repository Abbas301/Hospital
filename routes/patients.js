const express = require('express');
const { Patient, validate } = require('../models/patient');
const auth= require('../middlewares/auth')
const router = express.Router();

router.get('/', async (req, res) => {
  const patients = await Patient.find()
  res.send(patients)
})

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let patient = new Patient({
    date: req.body.date,
    patientName: req.body.patientName,
    email: req.body.email,
    id: req.body.id
  })
  patient = await patient.save();
  res.send(patient);
})

router.put('/:id', async (req, res) => {

  let patient = await Patient.findByIdAndUpdate(req.params.id, {
    date: req.body.date,
    patientName: req.body.patientName,
    email: req.body.email,
    id: req.body.id,
    hematology: req.body.hematology,
    glucometry: req.body.glucometry
  }, { new: true })
  if (!patient) return res.status(404).send("the customer with following id is not found")
  res.send(patient);

})

module.exports = router;
