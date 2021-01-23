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

//edit profile user
// router.put('/', authMiddleware, (req, res, nest) => {
//     const useredit = new User()
// })

//edit profile
// router.put('/', authMiddleware, (req, res) => {
//     User.findOneAndUpdate({_id:req.userId}, { $set: req.body}, {new:true}, (err, user) => {
//         if(err){
//             return res.send({msg: 'server error'})
//         }
//         if(user){
//             return res.send(user)
//         }
//     })

// })

//
router.post('/', authMiddleware,[
    body('firstname',"required and contains only alphabetics").isAlpha(),
    body('lastname', "required and contains only alphabetics").isAlpha(),
    body('address',"required and contains only alphabetics").isAlpha(),
    body('phone', "required and contains only numbers").isNumeric(),
] ,(req,res) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json(errors.array() )
    }
    User.findByIdAndUpdate({_id: req.userId})
    .then(user => {
        if( req.body.firstname !== ''){
            user.firstname=req.body.firstname      
        }
        

        if(req.body.lastname !== '' ){
            user.lastname = req.body.lastname
                
        }

        if(req.body.address !== '' ){
                user.address = req.body.address 
               
        }

        if(req.body.phone !== '' ){
                user.phone = req.body.phone 
                
        }
        user.save()
        return res.status(200).send(user)
    })
    .catch(err => {
        console.error(err.message)
        return res.status(500).send({msg: 'there is an error occured'})
    })
})
 //reset account
 router.put('/reset', [
     body('email', 'Please enter a valid email address').isEmail()
 ], (req, res) => {
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json(errors.array());
     }
     User.findOne({email:req.body.email})
     .then(user => {
         if(!user){
             return res.status(404).send({errors: [{msg:'There is no account registered with this email'}]});     
         }
         if(user){
             
             const code = user.ccode;
            
             const transporter = nodemailer.createTransport({
                 service: 'Gmail',
                 auth: {
                     user: 'chahla.khouloud@gmail.com',
                     pass: 'annaLida20&20',
                 },
             });

             transporter.sendMail({
                            to: user.email,
                            subject: 'Reset password',
                            html: `To change your password enter this code: ${code}`,
                        });

                console.log('link sent')  
                return res.send(user)      
            //  let payload = {
            //      userId: user._id
            //  };

            //  jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {

            //     const url = `http://localhost:3000/edit/reset/${payload.userId}`; 

            //     if(err){
            //         throw err;
            //     }

            //     else{
            //         transporter.sendMail({
            //             to: user.email,
            //             subject: 'Reset password',
            //             html: `Please click on the link to change your password: <a href='${url}'>${url}</a>`,
            //         });

            //         console.log('token sent')
            //         return res.status(200).send({token});
                    
                    
            //     }
                
            //  })
                 
            }
     })
 })
//


//change my password
router.put('/', authMiddleware,[
    body('currentpassword').isLength({min:5}),
    body("newpassword").isLength({min:5}),
],(req, res) => {
    const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json(errors.array());
     }
     User.findById({_id: req.userId})
           .then(user => {
                bcrypt.compare(req.body.currentpassword, user.password, (err, isMatch) => {
                    if(err){
                     throw err;
                    }
                    if(!isMatch){
                     return res.status(200).send({msg:'current password wrong, try again..'})
                    }
                    else{
                        bcrypt.genSalt(10, (err, salt) => {
                            if(err){
                             throw err;
                            }
                             bcrypt.hash(req.body.newpassword, salt, (err, hashedPwd) => {
                               if(err){
                               throw err;
                               }
                               user.password = hashedPwd;
                               user.save();
                               console.log('password changed')
                               return res.status(200).send(user)
                               
                            })
                        })
                        
                    }
                    
                })
                    
            })
            .catch(err => {
                console.error(err.message)
                return res.status(500).send({msg:'server error'})
            })

})

 
     
router.post('/resetaccount', authMiddleware,[
    body('password', 'Must have minimun length 5 characters').isLength({min:5})
], (req, res) => {
    const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json(errors.array());
     }
     User.findById(req.userId)
     .then(user => {
         bcrypt.genSalt(10, (err, salt) => {
             if(err){
                 throw err;
             }
             bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
                 if(err){
                     throw err;
                 }
                 user.password = hashedPwd
                 user.save()
                 console.log('password changed and recupuration done')
                 return res.send(user)
             })
         })
     })
     
            
         
    
})

 module.exports = router;