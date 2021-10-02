const express  = require ('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')




//import routes
const driverroutes= require('./routes/drivers')
const vehicleroutes= require('./routes/vehicles')





//accounts import rotes
const accountroutes=require('./routes/accounts');
const accountplanroutes=require('./routes/accountplans');



//middleware
app.use(bodyparser.json()) 
app.use(cors())

//transport  routes midleware
app.use(driverroutes)
app.use(vehicleroutes)


//accounts routes midleware
app.use(accountroutes);
app.use(accountplanroutes);


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