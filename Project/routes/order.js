const express = require('express');
const Orders = require('../models/order');


const router = express.Router();
//save posts

router.post('/order/save',(req, res) =>{
    let newOrder = new Orders(req.body);

    newOrder.save((err) =>{   
        if(err){
             return res.status(400).json({
                error:err
             });
        }  
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

//get posts
router.get('/order',(req, res) =>{
    Orders.find().exec((err,order) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingorder:order,
        });
     });  
});

//get a specific post
router.get("/order/:id",(req,res) =>{

    let orderID = req.params.id;

    Orders.findById(orderID,(err,order) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
         return res.status(200).json({
            success:true,
            order
        });
    });

});

//update posts
router.put('/order/updateorder/:id', (req,res) =>{
  Orders.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,order)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update unccessfully"
            });
        }
    );
});

//delete post
router.delete('/order/deleteorder/:id', (req,res) => {
  Orders.findByIdAndRemove(req.params.id).exec((err,deleteorder) =>{
   
    if (err)    return res.status(400).json({
        message:"Delete unsuccesful",err
      });
    
    return res.json({
      message:"Delete Succesful",deleteorder
     
    });
  });
});


module.exports = router;