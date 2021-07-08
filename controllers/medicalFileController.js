
// const MedicalFile = require("../models/MedicalFile");
// const User=require("../models/User")
// module.exports = {
//     createFile: async (req, res) => {
      
//     try {
//       const newFile = new MedicalFile({
//         userId: req.user._id,
//         ...req.body,
//       });
//       const medicalfile = await newFile.save();
//       // console.log("1",medicalfile)
//       const user = await User.findOne({ _id: req.user._id });
//       // console.log("2",user)

//       user.MedicalFiles.push (medicalfile._id);
//       // console.log("3",user)

//       await user.save();
//     // console.log("4",user)
//       res.json({ msg: "medicalFile created", medicalfile, user });
//     } catch (error) {
//       res.status(500).send("server error");
//     }
//     },

//   // createFile:async (req,res)=>{
//   //   try {
           
//   //        const newFile=new MedicalFile({
//   //            userId:req.user._id,...req.body
//   //        })
//   //     const medicalFile= await  newFile.save()
 
//   //      res.json({msg:"medicalfile created",medicalFile,user })
//   //    } catch (error) {
//   //        res.status(500).send("server error")
//   //     }
//   //  },
// //   getfiles: async (req, res) => {
// //     try {
// //       const files = await MedicalFile.find();
// //       res.json({ files });
// //     } catch (error) {}
// //   },


// //   getProfileById:async (req,res)=>{
// //       try {
          
// //           const medicalFile= await MedicalFile.findById(req.params.id).populate("userId")
// //           res.json({msg:"medicaleFile loaded",medicalFile})
// //       } catch (error) {
// //           res.send("server error")

// //       }

// //   },
// //     editmedicalFile:async (req,res)=>{
// //       try {
// //           const editmedicalFile=await MedicalFile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
     
// //       } catch (error) {
// //           res.send("server error")

// //       }
// //   },
// //   deletemedicalFile:async (req,res)=>{
// //       try {
// //           const medicalFileDeleted=await MedicalFile.findOneAndDelete({_id:req.params.id})
// //           res.json({msg:"medicalFile deleted",medicalFileDeleted})
// //       } catch (error) {
// //           res.send("server error")

// //       }
// //   }
// // }

// // editmedicalFile:async (req,res)=>{
// //       try {
// //           const editmedicalFile=await MedicalFile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
     
// //       } catch (error) {
// //           res.send("server error")

// //       }
// //   }

// // //const Profile=require("../models/Profile")
// // module.exports={

// //   getProfile:async (req,res)=>{
// //       try {
// //           const profiles=await Profile.find().populate("userId")
// //           res.json({profiles})
// //       } catch (error) {
          
// //       }
// //   },
// //   deleteProfile:async (req,res)=>{
// //       try {
// //           const profileDeleted=await Profile.findOneAndDelete({_id:req.params.id})
// //           res.json({msg:"profile deleted",profileDeleted})
// //       } catch (error) {
// //           res.send("server error")
// //       }
// //   },
// //   editProfile:async (req,res)=>{
// //       try {
// //           const editedProfile=await Profile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
     
// //       } catch (error) {
// //           res.send("server error")

// //       }
// //   },
// //   getProfileById:async (req,res)=>{
// //       try {
          
// //           const profile= await MedicalFile.findById(req.params.id).populate("userId")
// //           res.json({msg:"medicaleFile loaded",medicalFile})
// //       } catch (error) {
// //           res.send("server error")

// //       }

// //   }
//   }
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
      // console.log("1",medicalfile)
      const user = await User.findOne({ _id: req.user._id });
      // console.log("2",user)
      user.MedicalFiles.push (medicalfile._id);
      // console.log("3",user)
      await user.save();
    // console.log("4",user)
      res.json({ msg: "medicalFile created", medicalfile, user });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  getMedicalFile:async (req,res)=>{
      try {
          const medicalFiles=await MedicalFile.find().populate("userId")
          res.json({medicalFiles})
      } catch (error) {
      }
  },
  getfileById:async (req,res)=>{
      try {
          const medicalFile= await MedicalFile.findById(req.params.id).populate("userId")
          res.json({msg:"medicaleFile loaded",medicalFile})
      } catch (error) {
          res.send("server error")
      }
  },
    editmedicalFile:async (req,res)=>{
      try {
        const editedmedicalFile=await  MedicalFile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.json({msg:"medicalfile edited",editedmedicalFile})
    } catch (error) {
        res.send("server error")

    }
},
  deletemedicalFile:async (req,res)=>{
    //try {
    //   const user = await User.findOne({ _id: req.params.idUser });
    //   const medicalFile = await MedicalFile.findOne({ _id: req.params.idMedicalFile});
    
    //       if (user._id.equals(medicalFile.userId)) {

    //   const medicalFileDeleted = await MedicalFile.findOneAndDelete({
    //     _id: req.params.idMedicalFile,
    //   });
    //   console.log(medicalFileDeleted);
    // }
    // res.json({ msg: "medicalFile", medicalFileDeleted  });
    // } catch (error) {
    // res.send("server error");
    // }
    // }}
   
            try {
                const medicalFileDeleted=await MedicalFile.findOneAndDelete({_id:req.params.id})
                res.json({msg:"medicalfile deleted",medicalFileDeleted})
              } catch (error) {
                res.send("server error")
        
            }
        }};
// editmedicalFile:async (req,res)=>{
//       try {
//           const editedmedicalFile=await MedicalFile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
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
//   getMedicalFile:async (req,res)=>{
//       try {
//           const medicalFiles=await MedicalFile.find().populate("userId")
//           res.json({medicalFiles})
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
//}}
 