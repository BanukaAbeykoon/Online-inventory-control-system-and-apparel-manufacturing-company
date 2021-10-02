const express= require('express')
const Drivers= require('../models/driver');

const Drivershe= require('../models/driverschedul')
const router = express.Router();


//save driver

router.post('/driver/save',(req,res)=>{
    let newDriver = new Drivers(req.body);

    newDriver.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"New Driver Added Successfully"
        });
    });
});

//get drivers

router.get('/driver/DriHome',(req,res)=>{
    Drivers.find().exec((err,driver)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:driver
        });
    });
});

//update driver

router.put('/driver/DriHome/updatedriver/:id',(req,res)=>{
    Drivers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,driver)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Driver Update successfully"
            });
        }
        
    );
});

// delete driver 

router.delete('/driver/deletedriver/:id',(req,res)=>{
    Drivers.findByIdAndRemove(req.params.id ).exec((err,deletedriver)=>{
        if(err) return res.status(400).json({
            message:"delete Unsuccessful",err
        });

        return res.json({
            message:"Delete Successfull",deletedriver
        });

        }
    )
})


//get specific driver

router.get('/driver/DriHome/:id',(req,res)=>{
    let driverid= req.params.id;

    Drivers.findById(driverid,(err,driver)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            driver
        });
    });
});

//schedule routes
router.get('/driverschedul/Driverschedule',(req,res)=>{
    Drivershe.find().exec((err,driverschedul)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:driverschedul
        });
    });
});

router.post('/driver/Driverschedule/save',(req,res)=>{
    let newDriver = new Drivershe(req.body);

    newDriver.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"New Driver Added Successfully"
        });
    });
});

router.delete('/driverschedul/deletedriver/:id',(req,res)=>{
    Drivershe.findByIdAndRemove(req.params.id ).exec((err,deletedriver)=>{
        if(err) return res.status(400).json({
            message:"delete Unsuccessful",err
        });

        return res.json({
            message:"Delete Successfull",deletedriver
        });

        }
    )
})
module.exports= router