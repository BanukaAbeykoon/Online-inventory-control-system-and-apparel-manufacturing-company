const express = require("express");
//Import Inventory user model (Inside models file)
const Inventory = require("../models/inventory");
   
//invoke function in expperss -- express.Router
const router = express.Router();



//Create & save Factory
router.post("/inventory/create", (req, res) => {
  let newInventory = new Inventory(req.body);

  newInventory.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "Factory saved successfully",
    });
  });
});



//get factory 
router.get("/inventory", (req, res) => {
  Inventory.find().exec((err, inventory) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingInventory: inventory,
    });
  });
});
 


//get a specific post
router.get("/inventory/:id", (req, res) => {
  let inventoryId = req.params.id;

  Inventory.findById(inventoryId, (err, inventory) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      inventory,
    });
  });
});
 



//update posts
router.put("/inventory/update/:id", (req, res) => {
  Inventory.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, inventory) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Update Factory Successfully",
      });
    }
  );
});
 


//delete post
router.delete("/inventory/delete/:id", (req, res) => {
  Inventory.findByIdAndRemove(req.params.id).exec((err, deleteInventory) => {
    if (err)
      return res.status(400).json({
        message: "Delete Factory unsuccessful",
        err,
      });

    return res.json({
      message: "Delete Factory Succesfull",
      deleteInventory,
    });
  });
});



module.exports = router;
