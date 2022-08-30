require ('dotenv').config()

const mongo_url= process.env.DATABASE_URL;
const mongoose= require('mongoose')
const express= require('express')
const routes= require('./routes/Authcontroller')

const app= express()
app.use(express.json())
app.use('/user',routes);

mongoose.connect(mongo_url)
const database= mongoose.connection;

database.on('error',(error)=> {
    console.log(error)
})

database.once('connected',(connected)=> {
    console.log('Database Connected');
})


app.listen(3000,()=> {
    console.log('Server running at 3000');
})
