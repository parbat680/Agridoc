const delivery= require('../models/delivery');
const {ObjectId} = require('mongodb');

module.exports.deliveryDetails = async(req) => {

    const data= delivery({
        user: ObjectId(req.body.user),
        name: req.body.name,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        pincode: req.body.pincode,

    })

    const saved= await data.save();
    
}