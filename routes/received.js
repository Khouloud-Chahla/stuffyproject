const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Colis = require('../models/Colis');
const authMiddleware = require('../helper/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
    User.findById(req.userId)
    .then(user => {
        let obj = {
            receiver_email: user.email,
           
        //     sln: user.lastname
        };
        Colis.find({receiver: obj.receiver_email})
        .then(info => res.send(info))
        .catch(err => {
            console.error(err.message)
            res.status(500).send({msg:'server error'})
        })
    })
    .catch(err => {
        console.error(err.message)
        res.status(501).send({msg: 'server error'})
    })
})

module.exports = router;