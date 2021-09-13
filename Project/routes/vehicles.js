const express = require('express')
const Vehicles= require('../models/vehicle')
const Vehicleshe= require('../models/vehicleschedule')
const router = express.Router();

//save vehicle

router.post('/vehicle/save',(req,res)=>{
    let newVehicle= new Vehicles(req.body);

    newVehicle.save((err)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"New Vehicle Added Successfully"
        });
    });
});

router.get('/vehicle/vehicleDash',(req,res)=>{
    Vehicles.find().exec((err,vehicle)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:true,
            existingPosts:vehicle
        });
    });
});

router.put('/vehicle/vehicleDash/updatevehicle/:id',(req,res)=>{
    Vehicles.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,vehicle)=>{
            if(err){
                return req.status(400).json({error:err});

            }
            return res.status(200).json({
                success:"Vehicle Update successfully"
            })
        }

    
    )
})

router.delete('/vehicle/deletevehicle/:id',(req,res)=>{
    Vehicles.findByIdAndRemove(req.params.id).exec((err,deletevehicle)=>{
        if(err) return res.status(400).json({
            messege:"delete unsuccessfull"
        })
        return res.json({
            messege:"Delete Successfull",deletevehicle
        });
    })
})

router.get('/vehicle/vehicleDash/:id',(req,res)=>{
    let vehicleid=req.params.id;

    Vehicles.findById(vehicleid,(err,vehicle)=>{
        if(err)
        {
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            vehicle
        })
    })
})

//schedule routes
router.get('/vehicleschedule/VehicleSchedule',(req,res)=>{
    Vehicleshe.find().exec((err,vehicleschedule)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:true,
            existingPosts:vehicleschedule
        });
    });
});
 
router.post('/vehicle/VehicleSchedule/save',(req,res)=>{
    let newVehicle= new Vehicleshe(req.body);

    newVehicle.save((err)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"New Vehicle Added Successfully"
        });
    });
});

router.delete('/vehicleschedule/deletevehicle/:id',(req,res)=>{
    Vehicleshe.findByIdAndRemove(req.params.id).exec((err,deletevehicle)=>{
        if(err) return res.status(400).json({
            messege:"delete unsuccessfull"
        })
        return res.json({
            messege:"Delete Successfull",deletevehicle
        });
    })
})
module.exports= router