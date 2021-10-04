const express = require('express');

const Matreports = require('../models/matreport');

const router = express.Router();

//save material

router.post('/matreport/save', (req,res) =>{

    let newMatreport = new Matreports(req.body);

    newMatreport.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Material Report saved successfully"
        });
    });
});

//getpost
router.get('/matreport',(req,res) =>{
    Matreports.find().exec((err,matreport) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:matreport
        });
    });
});

//get a spesific post
router.get('/matreport/:id',(req,res) =>{
    let matreportid =req.params.id;

    Matreports.findById(matreportid,(err,matreport) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            matreport
        });

    });
});

//update posts
router.put('/matreport/updatematreport/:id',(req,res)=>{
    Matreports.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,matreport)=>{
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

router.delete('/matreport/deletematreport/:id',(req,res) =>{
    Matreports.findByIdAndRemove(req.params.id).exec((err,deletematreport) =>{
        
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deletematreport
        });

    });
});

module.exports = router;