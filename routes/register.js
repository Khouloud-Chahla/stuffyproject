const express = require('express');
const router = express.Router();
const User = require('../models/User');
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
//criptage
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post("/",[
    body('firstname', 'firstname must contain only alphabetic').isAlpha(),
    body('lastname', 'lastname must contain only alphabetic').isAlpha(),
    body('address', 'address must contain only alphabetic').isAlpha(),
    body('phone', 'phone must contain only numbers').isNumeric(),
    body('email', 'please add a valid email').isEmail(),
    body('username', 'username must contain only alphabetic').isAlpha(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 })
  ], (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json(errors.array() );
    }
    User.find({email: req.body.email})
    .then(users => {
        if(users.length){
            return res.status(400).send([{msg: "Email already exist"}])
        }
        let newUser = new User(req.body)
        bcrypt.genSalt(10, (err, salt) => {
            if(err){
                throw err;
            }
            bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
                if (err){
                    throw err;
                }
                newUser.password = hashedPwd;
                newUser.save();
                console.log("user is saved")
                //tkn generation
                let payload = {
                    userId: newUser._id
                }
                jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                    if (err){
                        throw err;
                    }
                    res.send({token})
                })

            })
        })

    })

  })
  module.exports = router;