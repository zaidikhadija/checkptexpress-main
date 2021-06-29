
const MedicalFile = require("../models/MedicalFile");
const User=require("../models/User")
module.exports = {
    createFile: async (req, res) => {
      const { weight, medicalHistory,  allergiesName,bloodType} = req.body;
    try {
      const newFile = new MedicalFile({    
        userId: req.user._id,
        ...req.body,
      });
      const medicalfile = await newFile.save();
      const user = await User.findOne({ _id: req.user._id });
      user.MedicalFiles = [...user.MedicalFiles, MedicalFile._id];
      user.save();
      res.json({ msg: "medicalFile created", medicalFile, user });
    } catch (error) {
      res.status(500).send("server error");
    }
  },

  getfiles: async (req, res) => {
    try {
      const files = await MedicalFile.find();
      res.json({ files });
    } catch (error) {}
  },


  getProfileById:async (req,res)=>{
      try {
          
          const medicalFile= await MedicalFile.findById(req.params.id).populate("userId")
          res.json({msg:"medicaleFile loaded",medicalFile})
      } catch (error) {
          res.send("server error")

      }

  },
    editmedicalFile:async (req,res)=>{
      try {
          const editmedicalFile=await MedicalFile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
     
      } catch (error) {
          res.send("server error")

      }
  },
  deletemedicalFile:async (req,res)=>{
      try {
          const medicalFileDeleted=await MedicalFile.findOneAndDelete({_id:req.params.id})
          res.json({msg:"medicalFile deleted",medicalFileDeleted})
      } catch (error) {
          res.send("server error")

      }
  }
}

// editmedicalFile:async (req,res)=>{
//       try {
//           const editmedicalFile=await MedicalFile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
     
//       } catch (error) {
//           res.send("server error")

//       }
//   }

// //const Profile=require("../models/Profile")
// module.exports={
//   createProfile:async (req,res)=>{
//       try {
          
//           const newProfile=new Profile({
//               userId:req.user._id,...req.body
//           })
//        const profile= await  newProfile.save()

//         res.json({msg:"profile created",profile})
//       } catch (error) {
//           res.status(500).send("server error")
//       }
//   },
//   getProfile:async (req,res)=>{
//       try {
//           const profiles=await Profile.find().populate("userId")
//           res.json({profiles})
//       } catch (error) {
          
//       }
//   },
//   deleteProfile:async (req,res)=>{
//       try {
//           const profileDeleted=await Profile.findOneAndDelete({_id:req.params.id})
//           res.json({msg:"profile deleted",profileDeleted})
//       } catch (error) {
//           res.send("server error")
//       }
//   },
//   editProfile:async (req,res)=>{
//       try {
//           const editedProfile=await Profile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
     
//       } catch (error) {
//           res.send("server error")

//       }
//   },
//   getProfileById:async (req,res)=>{
//       try {
          
//           const profile= await MedicalFile.findById(req.params.id).populate("userId")
//           res.json({msg:"medicaleFile loaded",medicalFile})
//       } catch (error) {
//           res.send("server error")

//       }

//   }
// }