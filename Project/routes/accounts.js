const express = require('express');
const Accounts = require("../models/account");

const router = express.Router();

//save
router.post('/account/save',(req,res)=>{

    let newAccount =new Accounts(req.body);

    newAccount.save((err)=>{
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

router.get('/account',(req,res)=>{
    Accounts.find().exec((err,account)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:account
        });
    });
});


//get a specific post

router.get("/account/:id",(req,res)=>{

    let accountid = req.params.id;

    Accounts.findById(accountid,(err,account)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            account
        });
    });
});


//update posts

router.put('/account/updateaccount/:id',(req,res)=>{
    Accounts.findByIdAndUpdate(
        req.params.id,{

            $set:req.body
        },
        (err,account)=>{
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

router.delete('/account/deleteaccount/:id',(req,res)=>{
    Accounts.findByIdAndRemove(req.params.id).exec((err,deleteaccount)=>{

        if(err) return res.status(400).json({
            message: "delete unsuccessful",err
        });

        return res.json({
            message:"Delete Succesfull",deleteaccount
        });

    });
});



module.exports = router;