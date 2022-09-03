const jwt = require ('jsonwebtoken')
require('dotenv').config()

exports.verify= function(req,res,next){
    let token= req.header('token');

    if(!token){
        return res.status(400).send({message: 'send token in the headers'})
    }

    let payload;

    try {
        
        payload= jwt.verify(token,process.env.JWT_SECRET);
        next();

    } catch (error) {
        res.status(500).send({message: 'Error occured please try again later.'})
    }
}