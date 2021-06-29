const ProfileDoctor=require("../models/ProfileDoctor")
const Doctor=require("../models/Doctor")
module.exports={
    createProfileDoctor:async (req,res)=>{
        try {
            
            const newProfileDoctor=new ProfileDoctor({
                doctorId:req.doctor._id,...req.body
            })
         const profileDoctor= await  newProfileDoctor.save()

          res.json({msg:"profileDoctor created",profileDoctor})
        } catch (error) {
            res.status(500).send("server error")
        }
    },
    getProfile:async (req,res)=>{
        try {
            const profiles=await ProfileDoctor.find().populate("doctorId")
            res.json({profiles})
        } catch (error) {
            
        }
    },
    deleteProfile:async (req,res)=>{
        try {
            const profileDoctorDeleted=await ProfileDoctor.findOneAndDelete({_id:req.params.id})
            res.json({msg:"profileDoctor deleted",profileDoctorDeleted})
        } catch (error) {
            res.send("server error")
        }
    },
    editProfileDoctor:async (req,res)=>{
        try {
            const editedProfileDoctor=await ProfileDoctor.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
       
        } catch (error) {
            res.send("server error")

        }
    },
    getProfileDoctorById:async (req,res)=>{
        try {
            
            const profileDoctor= await Profile.findById(req.params.id).populate("doctorId")
            res.json({msg:"profile loaded",profileDoctor})
        } catch (error) {
            res.send("server error")

        }

    }
}