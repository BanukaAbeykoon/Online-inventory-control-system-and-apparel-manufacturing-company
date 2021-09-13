const express  = require ('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')


//import routes
const driverroutes= require('./routes/drivers')
const vehicleroutes= require('./routes/vehicles')

//middleware
app.use(bodyparser.json()) 
app.use(cors())

app.use(driverroutes)
app.use(vehicleroutes)



const PORT = 8000;
const DB_URL = 'mongodb+srv://itpcasanova:cas123@cluster0.jav72.mongodb.net/CasanovaDB?retryWrites=true&w=majority'

mongoose.connect(DB_URL).then(()=>{
    console.log('Mongodb Successfully Connected')
}).catch((err)=>{
    console.log('mongodb connection Failed')
})

app.listen(PORT,()=>{
    console.log(`Server is Running on port No ${PORT}`)
})



module.exports= mongoose