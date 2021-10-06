//Import expres package & mongoose package by require
const express  = require ('express')
const mongoose = require('mongoose')

//coming to server json format, so convert to js format
const bodyparser = require('body-parser')

//To run server create constant variable app
//Invoke express
const app = express()

//To reject browser security while two domain working
const cors = require('cors')




//import routes
const driverroutes= require('./routes/drivers')
const vehicleroutes= require('./routes/vehicles')





//accounts import rotes
const accountroutes=require('./routes/accounts');
const accountplanroutes=require('./routes/accountplans');



//import production routes
const inventoryRoutes = require("./routes/inventory");
const factoryRoutes = require("./routes/factory");
//const orderRoutes = require("./routes/orders");


//import Shipment routes
const shipmentroutes = require('./routes/shipments');
const lessmaterialRoutes = require('./routes/lmocard');

//import material routes
const materialroutes = require('./routes/materials');
const lmomatroutes = require('./routes/lmomats');
const matreportroutes = require('./routes/matreports');

//import order routes
const orderRoutes = require('./routes/order');


//middleware
app.use(bodyparser.json()) 
app.use(cors())

//transport  routes midleware
app.use(driverroutes)
app.use(vehicleroutes)


//accounts routes midleware
app.use(accountroutes);
app.use(accountplanroutes);


//production routes midleware
app.use(inventoryRoutes);
app.use(factoryRoutes);
app.use(orderRoutes);



//routes shipment middleware
app.use(shipmentroutes);
app.use(lessmaterialRoutes);

//route material midleware
app.use(materialroutes);
app.use(lmomatroutes);
app.use(matreportroutes);

//route order middleware
app.use(orderRoutes);


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