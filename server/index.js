require ('dotenv').config()

const mongo_url= process.env.DATABASE_URL;
const mongoose= require('mongoose')
const express= require('express')
const auth_routes= require('./routes/Authcontroller')
const category_routes= require('./routes/category')
const product_routes= require('./routes/product')

const app= express()
app.use(express.json())
app.use('/user',auth_routes);
app.use('/category',category_routes)
app.use('/product',product_routes)

mongoose.connect(mongo_url)
const database= mongoose.connection;

database.on('error',(error)=> {
    console.log(error)
})

database.once('connected',(connected)=> {
    console.log('Database Connected');
})


app.listen(process.env.PORT ||3000,()=> {
    console.log('Server running at 3000');
})
