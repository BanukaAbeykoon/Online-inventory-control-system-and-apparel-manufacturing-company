const express = require('express');
const AccountPlans = require("../models/accountplan");

const router = express.Router();

//save
router.post('/accountplan/save',(req,res)=>{

    let newAccountplan =new AccountPlans(req.body);

    newAccountplan.save((err)=>{
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


//get

router.get('/accountplan',(req,res)=>{
    AccountPlans.find().exec((err,accountplan)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:accountplan
        });
    });
});


//get a specific post

router.get("/accountplan/:id",(req,res)=>{

    let accountplanid = req.params.id;

    AccountPlans.findById(accountplanid,(err,accountplan)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            accountplan
        });
    });
});


//update posts

router.put('/accountplan/updateaccountplan/:id',(req,res)=>{
    AccountPlans.findByIdAndUpdate(
        req.params.id,{

            $set:req.body
        },
        (err,accountplan)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfully"
            });
        }

    );
});

//delete post

router.delete('/accountplan/deleteaccountplan/:id',(req,res)=>{
    AccountPlans.findByIdAndRemove(req.params.id).exec((err,deleteaccountplan)=>{

        if(err) return res.status(400).json({
            message: "delete unsuccessful",err
        });

        return res.json({
            message:"Delete Succesfull",deleteaccountplan
        });

    });
});



module.exports = router;