const express = require("express");
const Shipments = require("../models/shipment");


const router = express.Router();

//save posts
router.post("/shipment/save", (req, res) => {
 
  let newShipment = new Shipments(req.body);

  newShipment.save((err) => {
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

router.get("/shipment", (req, res) => {
  Shipments.find().exec((err,shipment) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingshipment: shipment,
    });
  });
});

//get a specific post

router.get("/shipment/:id",(req,res) =>{
 
  let shipmentid = req.params.id;

  Shipments.findById(shipmentid,(err,shipment) =>{
    if(err){
      return res.status(400).json({success:false, err});
    }

    return res.status(200).json({
      success:true,
      shipment
    });
  });
});


//update post

router.put("/shipment/updateshipment/:id", (req, res) => {
  Shipments.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err,shipment) => {
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

router.delete('/shipment/deleteshipment/:id' ,(req,res) =>{
    Shipments.findByIdAndRemove(req.params.id).exec((err,deletedshipment) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedshipment
        });
            
    });
});




module.exports = router;
