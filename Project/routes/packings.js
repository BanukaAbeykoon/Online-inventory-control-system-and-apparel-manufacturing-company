const express = require('express');
const Packing = require('../models/packing');


const router = express.Router();
//save posts

router.post('/packing/save',(req, res) =>{
    let newPacking = new Packing(req.body);

     newPacking.save((err) =>{   
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
router.get('/packing',(req, res) =>{
    Packing.find().exec((err,packing) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:packing,
        });
     });  
});

//get a specific post
router.get("/packing/:id",(req,res) =>{

    let packingId = req.params.id;

    Packing.findById(packingId,(err,packing) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
         return res.status(200).json({
            success:true,
            packing
        });
    });

});

//update posts
router.put('/packing/update/:id', (req,res) =>{
  Packing.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,packing)=>{
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
router.delete('/packing/delete/:id', (req,res) => {
  Packing.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
   
    if (err)    return res.status(400).json({
        message:"Delete unsuccesful",err
      });
    
    return res.json({
      message:"Delete Succesful",deletedPost
     
    });
  });
});


module.exports = router;