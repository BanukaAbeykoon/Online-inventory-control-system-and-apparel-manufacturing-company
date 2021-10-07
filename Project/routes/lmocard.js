const express = require("express");
const Lmo = require("../models/lmocard");

const router = express.Router();

//save posts
router.post("/lmocard/save", (req, res) => {
  let newLmo = new Lmo(req.body);

  newLmo.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Posts saved successfully",
    });
  });
});

//get posts

router.get("/lmocard", (req, res) => {
  Lmo.find().exec((err, lmocard) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existinglmocard: lmocard,
    });
  });
});

//get a specific post

router.get("/lmocard/:id",(req,res) =>{

  let lmoid = req.params.id;

  Lmo.findById(lmoid,(err,lmocard) => {
    if(err){
      return res.status(400).json({success:false, err});
    }

    return res.status(200).json({
      success:true,
      lmocard
    });
  });
});

//update post

router.put("/lmocard/updatelmocard/:id", (req, res) => {
  Lmo.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, lmocard) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Updated Successfully",
      });
    }
  );
});

//Delete post

router.delete('/lmocard/deleteslmocard/:id', (req, res) => {
  Lmo.findByIdAndRemove(req.params.id).exec((err, deleteslmocard) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesful",
        err,
      });

    return res.json({
      message: "Delete Succesfull",
      deleteslmocard
    });
  });
});

module.exports = router;
