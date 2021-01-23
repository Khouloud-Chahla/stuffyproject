const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const authMiddleware = require('../helper/authMiddleware');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
require('dotenv').config();
mongoose.set('useFindAndModify', false);
const nodemailer = require('nodemailer');
const { route } = require('./register');
validator = require('express-validator');
const jwt = require('jsonwebtoken');

router.post('/', [
    body('code')
], (req, res) => {
    const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json(errors.array());
     }
     User.findOne({ccode: req.body.code})
     .then(user => {
         if(!user){
             return res.send('no user found')
         }
         let payload = {
             userId : user._id
         }
         jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
             if(err){
                 throw err;
             }
             console.log('token sent')
             return res.send({token})
         })
     })
})

module.exports = router;
