const { json } = require('express');
const express= require('express')
const user= require('../models/usermodel')
const router= express.Router()
const bcrypt= require('bcrypt')
const {verify}= require('../middleware/jwt_token')
const jwt= require('jsonwebtoken')
require('dotenv').config()


router.get('',(req,res)=> {
    res.send('/api called success');
})

router.get('/get',verify,async (req,res)=> {
    try {
        const data= await user.find();
        res.status(200).send(data);

    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/get/:id', async (req,res)=> {
    try {
        const data = await user.findById(req.params.id);
        res.status(200).send(data)
    } catch (error) {
        
    }
})

router.patch('/patch/:id',async (req,res)=> {
    try {
        const id= req.params.id
        const body= req.body
        const options= {new :true}
        const result=await  user.findByIdAndUpdate(
            id,body,options
        );
        res.status(200).send(result);

    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/add',async (req,res) =>  {
    var salt =await bcrypt.genSaltSync(10);
    req.body.password=await  bcrypt.hash(req.body.password,salt)
    
    const data= new user({
        name: req.body.name,
        password : req.body.password,
        phone : req.body.phone,
        created_on : Date().toString(),

    });

    try {
        var token= jwt.sign({id: data._id},process.env.JWT_SECRET,{
            expiresIn: 86400,
        });
        await data.save();
        
        res.status(200).json({
            message : 'user created successfully',
            token : token
        });

    } catch (error) {
        res.status(400).json({message: 'Cannot create user'})
    }
})

router.delete('/delete/:id', async (req,res)=> {
    try {
        const id = req.params.id
        const result= await user.findByIdAndDelete(id) 
        res.json({'message': 'deleted'})
    } catch (error) {
        res.status(400).send('User not deleted')
    }
})

module.exports = router;
