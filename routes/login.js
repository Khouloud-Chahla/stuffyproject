const express = require('express');
const router = express.Router();
const authMiddleware = require('../helper/authMiddleware');
const User = require('../models/User');
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//LOAD CONNECTED USER 
router.get('/', authMiddleware, (req, res) => {
    User.findById(req.userId)
        .then(user => {
            if(!user){
                return res.status(404).send({msg: "User not found"})
            }
            res.status(200).send(user)
        })
        .catch(err => {
            console.error(err.message)
            res.status(500).send({msg: "SERVER ERROR"})
        })

})

//login user 
router.post('/', [
    body('email', 'Please add a valid email').isEmail(),
    body('password','password must have 5 characters minimum length').isLength({min:5})
], (req, res) => {
     //Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors:errors.array() });
    }
    User.findOne( {email: req.body.email} )
        .then( user => {
            if (!user){
                return res.status(400).send({ errors: [{msg: "Please create an account before"}] })
            }
            if(!user.verified_email){
                return res.status(400).send({ errors: [{msg: `You have to verify your e-mail before :) Please check your e-mailbox ` }]})
            }
            
                bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                    if(err){
                        throw err;
                    }
                    if(!isMatch){
                        return res.status(400).json({ errors:[{msg: 'Wrong password'}] });
                    }
                    else{
                        let payload = {
                            userId : user._id
                        }
                        jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                            if (err){
                                throw err;
                            }
                            res.send( {token} )
                        })
                    }
                })
           
        })

})


//  // LOGIN USER
//  router.post('/',[
//     body('email', 'please add a valid email').isEmail(),
//     // password must be at least 5 chars long
//     body('password', 'password must be at least 5 characters long').isLength({ min: 5 })
//   ], (req, res) => {
//       // Finds the validation errors in this request and wraps them in an object with handy functions
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//       return res.status(400).json({errors:errors.array()});
//     }
//     User.findOne({email: req.body.email})
//         .then(user => {
//             if(!user){
//                 return res.status(404).send({ errors:[{msg: "Please create an account before"}]
//              })
            
//             bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
//                 if(err){
//                     throw err;
//                 }
//                 if (!isMatch){
//                     return res.json({ errors:[{msg: "Wrong password!"}] });
//                 }
//                 else{
//                     let payload = {
//                         userId: user._id
//                     }
//                     jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
//                         if (err){
//                             throw err;
//                         }
//                         res.send({token})
//                     })
//                 }

                
//             })

//         })
// })

// router.get('/add', authMiddleware, (req, res) => {
//     User.find({_id : {$ne : req.userId}})
//     .then(users => {
//         let names=[];
//         users.map(el => names.push(el.firstname));
//         res.send(names);
//     })
//     .catch(err => {
//         console.error(err.message)
//          res.status(500).send({msg: "SERVER ERROR"})
//     })
// })


module.exports = router;