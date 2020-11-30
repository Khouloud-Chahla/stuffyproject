const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Colis = require('../models/Colis');
const authMiddleware = require('../helper/authMiddleware');
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

// add colis's data 
router.post('/', authMiddleware, (req, res) => {
  let colisData = new Colis({...req.body, owner:req.userId})
  colisData.save()
  .then(info => res.send(info))
  .catch((err) => {
    console.error(err.message)
    res.status(500).send({msg:'server error'})
  })
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






module.exports = router;
