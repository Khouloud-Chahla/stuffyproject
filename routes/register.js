const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
//criptage
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const nodemailer = require('nodemailer');
const authMiddleware = require('../helper/authMiddleware');
validator = require('express-validator');


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'chahla.khouloud@gmail.com',
        pass: 'annaLida20&20' ,
    }
});


router.post("/",[
    body('firstname', 'firstname must contain only alphabetic').isAlpha(),
    body('lastname', 'lastname must contain only alphabetic').isAlpha(),
    body('address', 'address must contain only alphabetic').isAlpha(),
    body('phone', 'phone must contain only numbers').isNumeric(),
    body('email', 'please add a valid email').isEmail(),
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
        //** */
        if(newUser.email == "chahla.khouloud@gmail.com"){
            newUser.identity = "admin"
        }
        bcrypt.genSalt(10, (err, salt) => {
            if(err){
                throw err;
            }
            bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
                if (err){
                    throw err;
                }
                newUser.password = hashedPwd;
                
                //code validation
                bcrypt.genSalt(10, (err, salt) => {
                    if(err){
                        throw err;
                    }
                    bcrypt.hash(newUser.firstname, salt, (err, code) => {
                        if(err){
                            throw err;
                        }
                        // const url = `http://localhost:3000/login/${code}`;
                        newUser.ccode = code;
                        newUser.save();
                        console.log("user is saved");
                        transporter.sendMail({
                                to: newUser.email,
                                subject:'E-mail Confirmation',
                                html: `To confirm your address enter this code: ${code}`,
                                             });
                        console.log('code sent successfully')  
                        return res.send(code)                   

                    })

                })

    
                //tkn generation
                // let payload = {
                //     userId: newUser._id
                // }
                // jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                //     if(err){
                //         throw err;
                //     }
                //     else{
                //         const url = `http://localhost:3000/verificate/${token}`  ;
                //         transporter.sendMail({
                //                         to: newUser.email,
                //                         subject:'E-mail Confirmation',
                //                         html: `Please click on the link to confirm your email address: <a href='${url}'>${url}</a>`,
                //                     });
                                  
                //     }
                //     console.log('link sent')
                //     return res.send(token)
                // })
                

                // // jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                // //     if(err){
                //         throw err;
                //     }
                //     res.send({token})
                // })
                // jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                //     const url = `http://localhost:3000/register/verify/${payload.userId}`;
                //     if(err){
                //         throw err;
                //     }
                //     else{
                //         transporter.sendMail({
                //             to: newUser.email,
                //             subject:'E-mail Confirmation',
                //             html: `Please click on the link to confirm your email address: <a href='${url}'>${url}</a>`,
                //         });
                //     }
                //     console.log('token sent successfully')
                //     // return res.status(200).send({token});
                    
                // });

            })
        })

    })
    .catch(err => res.send('error'))

  });

  router.post('/verify', [
      body('code', 'the code you just entered is wrong')
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json(errors.array() );
  }
  User.findOne({ccode: req.body.code})
      .then(user => {
          if(!user){
              return res.send('user not found')
          }
          user.verified_email = true;
          user.save()
          console.log('email verified')
          //generate token
          let payload = {
              userId : user._id
          }
          jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
              if(err){
                  throw err;
              }
              console.log('token sent successfully')
              return res.send({token})
          })
          
      })
      .catch(err => {
          console.error(err.message)
          return res.send('server error')
      })
   
  })



 
  
//   router.get('/verify/:id',
// //    [
// //       validator.param('id').isMongoId().trim()
// //    ], 
//   (req, res) => {

//     //    req.checkParams('id').isMongoId();
//     //   //validation result
//     //   var errors = validator.validationResult(req);
//     //   //check if there are errors

//       if(!errors.isEmpty()){
//           return res.send('404');
//       }
//       User.findOne( {_id:req.params.id})
//         .then(user => {
//           if(!user){
//               return res.status(404).send({msg: "User not found"})
//             }
//             else{
//                   user.verified_email = true,
//                   user.save()
//                   console.log('user email verified')
//                   return res.status(200).send(user)
//             }
//         })
//        .catch(err => {
//           console.error(err.message)
//           res.status(500).send({msg: 'server error'})
//       })
// })

  //
//   router.put('/:id', (req, res) => {
//       mongoose.set('useFindAndModify', false);
//       User.findByIdAndUpdate(req.params._id, req.body, {confirmed:true}, (err, user) => {
//           if(err){
//               throw err;
//           }
//           res.send(user.confirmed);
//       });
//   })
  module.exports = router;