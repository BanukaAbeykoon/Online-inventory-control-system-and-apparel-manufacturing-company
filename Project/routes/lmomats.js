const express = require('express');

const Lmomats = require('../models/lmomat');

const router = express.Router();

//save material

router.post('/lmomat/save', (req,res) =>{

    let newLmomat = new Lmomats(req.body);

    newLmomat.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Material saved successfully"
        });
    });
});

//getpost
router.get('/lmomat',(req,res) =>{
    Lmomats.find().exec((err,lmomat) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:lmomat
        });
    });
});

//get a spesific post
router.get('/lmomat/:id',(req,res) =>{
    let lmomatid =req.params.id;

    Lmomats.findById(lmomatid,(err,lmomat) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            lmomat
        });

    });
});

//update posts
router.put('/lmomat/updatelmomat/:id',(req,res)=>{
    Lmomats.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,lmomat)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success:"Update Succesfully"
            });
        }
    )
});

//delete post

router.delete('/lmomat/deletelmomat/:id',(req,res) =>{
    Lmomats.findByIdAndRemove(req.params.id).exec((err,deletelmomat) =>{
        
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deletelmomat
        });

    });
});

module.exports = router;