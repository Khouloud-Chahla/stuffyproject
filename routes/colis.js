const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Colis = require('../models/Colis');
const authMiddleware = require('../helper/authMiddleware');
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

// add colis's data 
// router.post('/', authMiddleware, (req, res) => {
//   User.findById({_id: req.userId})
//       .then(user => {
//         let obj = {
//           owner_email: user.email
//         }
//             let colisData = new Colis({...req.body, owner:req.userId})
//             colisData.emailowner = obj.owner_email,
               
//           .then(info => res.send(info))
//           .catch(err => {
//             console.error(err.message)
//             res.status(500).send({msg:'server error'})
//           })
        
//       })
//       .catch(err => {
//         console.error(err.message)
//         res.status(500).send({msg:'server error'})
//       })
// })
router.post('/', authMiddleware, (req, res) => {
  User.findById(req.userId)
      .then(user => {
        let obj = {
          owner_email : user.email
        }
        
         let colisData = new Colis({...req.body, owner: req.userId})
         colisData.emailowner = obj.owner_email
         colisData.save()
         .then(info => res.send(info))
              
            
         .catch(err => res.send('server error'))
        
      })
      .catch(err => res.send('server error'))
})

//get colis's data 
router.get('/', authMiddleware, (req, res) => {
  Colis.find({owner: req.userId})
  .then(info => res.send(info))
  .catch(err => {
    console.error(err.message)
    res.status(500).send({msg:'server error'})
  })
})

//delete colis's data
router.delete('/', authMiddleware,(req,res) => {
  Colis.findOneAndDelete({owner:req.userId})
  .then(info => res.send({msg:'ok deleted'}))
  .catch(err => {
    console.error(err.message)
    res.status(500).send({msg:'server error'})
  })
})

router.get('/add', authMiddleware, (req, res) => {
  User.find({_id : {$ne : req.userId}})
  .then(users => {
      let emails=[];
      users.map(el => emails.push(el.email));
      res.send(emails);
  })
  .catch(err => {
      console.error(err.message)
       res.status(500).send({msg: "SERVER ERROR"})
  })
})






module.exports = router;
