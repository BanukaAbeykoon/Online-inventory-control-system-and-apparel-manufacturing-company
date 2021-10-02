const express = require('express');
const Orders = require('../models/orders');

const router = express.Router();

// router.post("/orders/save", (req, res) => {
//   let newOrder = new Orders(req.body);

//   newOrder.save((err) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     return res.status(200).json({
//       success: "Orders saved successfully",
//     });
//   });
// });


router.get('/orders',(req,res) =>{
    Orders.find().exec((err,orders) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrders:orders
        });
    });
});


//get a specific order

router.get("/orders/:id",(req,res) =>{

    let orderId = req.params.id;

    orders.findById(orderId,(err,orders) =>{
    if(err){
        return res.status(400).json({success:false, err});
    }
    return res.status(200).json({
        success:true,
        orders
    });
    });
});




module.exports = router;