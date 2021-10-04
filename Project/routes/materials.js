const express = require('express');

const Materials = require('../models/material');

const router = express.Router();

//save material

router.post('/material/save', (req,res) =>{

    let newMaterial = new Materials(req.body);

    newMaterial.save((err) =>{
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
router.get('/material',(req,res) =>{
    Materials.find().exec((err,material) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:material
        });
    });
});

//get a spesific post
router.get('/material/:id',(req,res) =>{
    let materialid =req.params.id;

    Materials.findById(materialid,(err,material) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            material
        });

    });
});

//update posts
router.put('/material/updatematerial/:id',(req,res)=>{
    Materials.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,material)=>{
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

router.delete('/material/deletematerial/:id',(req,res) =>{
    Materials.findByIdAndRemove(req.params.id).exec((err,deletematerial) =>{
        
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deletematerial
        });

    });
});

module.exports = router;