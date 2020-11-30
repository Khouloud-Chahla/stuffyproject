const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Colis = require('../models/Colis');
const authMiddleware = require('../helper/authMiddleware');

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
router.get('/members',(req, res) => {
    User.find()
    .then(users => res.send(users))
    .catch(err => {
        console.error(err.message)
        res.status(501).send({msg: 'server error'})
    })
})

//update a colis
router.put('/:id', (req, res) => {
    Colis.findByIdAndUpdate(req.params.id, {condition: req.body})
    .then(colis => res.send(colis))
    .catch(err => {
        console.error(err.message)
        res.status(500).send({msg:"server error"})
    })
})
// 
router.delete('/:id', (req, res) => {
    Colis.findByIdAndDelete(req.params.id)
    .then(() => res.send("deleted"))
    .catch(err => {
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})

module.exports = router;