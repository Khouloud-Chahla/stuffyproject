const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    let token = req.header('auth-token');
    if(!token){
        return res.status(401).send([{msg: "You are not authorised"}]);
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if(err){
            throw err;
        }
        req.userId = payload.userId;
        next();
    })
}