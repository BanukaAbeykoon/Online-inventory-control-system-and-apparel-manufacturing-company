const express = require('express');
const Postsqc = require('../models/postsqc');
const Postsqcc = require('../models/postsqcc');

const router = express.Router();

//save posts

router.post('/post/save',(req,res)=>{

    let newPost = new Postsqc(req.body);

    newPost.save((err)=>{
        if(err){return res.status(400).json({
            error: err
            });
        }
        return res.status(200).json({
            success: "Posts saved successfully"
        });
    });
});


router.post('/post/save2',(req,res)=>{

    let newPost = new Postsqcc(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Posts saved successfully"
        });
    });
});


//get post

router.get('/postsqc',(req,res)=>{
    Postsqc.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a spesific post

router.get("/post/:id", (req, res) => {

  let postId = req.params.id;

  Postsqc.findById(postId,(err,post)=>{
        if(err){
        return res.status(400).json({success:false,err});
  }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update

router.put('/post/update/:id',(req,res) =>{
    Postsqc.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(err,post)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Updated Succeesfully"
        });
    });
});


//delete

router.delete('/post/delete/:id',(req,res)=>{
    Postsqc.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull",err
        })

        return res.json({
            message: "Delete Succesfull",deletedPost
        });
    });
});

module.exports = router;