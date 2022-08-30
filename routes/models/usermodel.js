const mongoose = require('mongoose')

const model= new mongoose.Schema({
    name: {
        required: true,
        type : String
    },
    phone :{
        required : true,
        type: String
    },
    password : {
        required : true,
        type : String,
    },
    created_on : {
        required : true,
        type : String,
    },
    avatar: {
        type : String,
        default: null,
    },
    referral : {
        type : String,
        default : null,
    },

});

module.exports= mongoose.model('user',model);