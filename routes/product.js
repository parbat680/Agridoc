const express = require('express')
const product = require('../models/product')
const category= require('../models/category')
var router = express.Router();
const {upload}= require('../routes/multer')
const { verify } = require('../middleware/jwt_token');
const { response } = require('express');
const {ObjectId} = require('mongodb'); 


// router.use(verify)

router.get('/get',async (req,res)=>{
   try{

    var s=ObjectId('636168e2bff7e5c064790323');
      
    
        var data= await product.aggregate([
            {
                $lookup: {
                  from: 'favourites',
                  localField: '_id',
                  foreignField: 'product_id',
                  as: 'afav',
                },
              },
              {
                $addFields: {
                  isFavourite: {
                    $cond: {
                      if: {
                        $in: [s,'$afav.user_id'],
                      },
                      then: true,
                      else: false,
                    },
                  },
                },
              },
            {
                $project:{
                    afav:0,
                }
            }
            
            
        ])

        await category.populate(data, {path: "category"});
        if(data)
            res.status(200).send(data)
        else res.status(400).send({message:"Error Occured",error:error})
   }
    catch (error) {
        console.log(error)
        res.status(500).send({message: "Error Occured",error:error})
    }
})

router.post('/add',upload.array('images'),async (req,res)=> {
  console.log("fired")
    try {
        var cat= await category.findOne({name:req.body.category})
        if(!cat){
            res.status(400).send({message: "Error Occured"})
            return;
        }

        var data= new product({
            name: req.body.name,
            description: req.body.description,
            category: cat._id,
            price: req.body.price,
            quantity: req.body.quantity,

        })
        console.log(data)
        for(i=0;i<req.files.length;i++){
          data.images.push('http://localhost:3000/api/'+req.files[i].filename);
      }

      console.log(data)
        var result= await data.save();
        console.log("res"+result)
        if(result)
            res.status(200).send(result)
        
        else res.status(400).send({message: "Error Occured"})
        

    } catch (error) {
        res.status(500).send({message: "Error Occured",error:error})
    }
})

module.exports = router