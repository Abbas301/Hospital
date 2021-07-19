
const jwt = require('jsonwebtoken') ;
const Joi = require('joi')
const bcrypt = require('bcrypt') ;
const _ = require('lodash')

const { User } = require ('../models/user')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();


router.post('/',async (req,res) =>{
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Invalid email or password')

    const validpassword = await bcrypt.compare(req.body.password , user.password)
    if(!validpassword) return res.status(400).send('Invalid role')

    const token = jwt.sign({_id:user._id},'jwtPrivateKey')

    res.send(token);
})

function validate(user) {
    const schema = {
        email : Joi.string().min(5).max(250).required().email(),
        role : Joi.string().min(3).max(50).required()
    } ;
    return Joi.validate(user,schema)
}

module.exports = router;