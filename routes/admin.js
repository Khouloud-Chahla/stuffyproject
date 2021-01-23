const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Colis = require('../models/Colis');
const authMiddleware = require('../helper/authMiddleware');
const { body, validationResult } = require('express-validator');

//get all colis
router.get('/', (req, res) => {
    Colis.find()
    .then(colis => res.send(colis))
    .catch(err => {
        console.error(err.message);
        res.status(501).send({msg:'server error'});
    })
});

//find all memebers
router.get('/mbr',(req, res) => {
    User.find()
    .then(users => res.send(users))
    .catch(err => {
        console.error(err.message)
        res.status(501).send({msg: 'server error'})
    })
})
//edit condition
router.put('/:id', [
    body('condition', 'not specified').isAlpha()
],(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
          return res.status(400).json(errors.array())
    }
    Colis.findOneAndUpdate({_id: req.params.id}, {$set:req.body}, {new:true}, (err, colis) => {
        if(err){
            return res.send('there is an error')
        }
        return res.status(200).send('condition successfully updated')
    })
})

//update a colis
// router.put('/:id', (req, res) => {
//     Colis.findByIdAndUpdate(req.params.id, {condition: req.body})
//     .then(colis => res.send(colis))
//     .catch(err => {
//         console.error(err.message)
//         res.status(500).send({msg:"server error"})
//     })
// })
// // 
// router.delete('/:id', (req, res) => {
//     Colis.findByIdAndDelete(req.params.id)
//     .then(() => res.send("deleted"))
//     .catch(err => {
//         console.error(err.message)
//         res.status(500).send({msg:'server error'})
//     })
// })

module.exports = router;