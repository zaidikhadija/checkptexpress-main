// const mongoose=require("mongoose")
// // Require Schema from mongoose
// const Schema = mongoose.Schema;

// // Create the ProfileDoctor schema

// const ProfileDoctorSchema=new mongoose.Schema({
//     doctorId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'doctor'
//     },
//    image:{
//        type:String
//    },
  
//   licence: {
//     type: String,
//     min: 6,
//     max: 12,
//   },
//   accreditations: //
//     {
//       type: String,
//       minlength: 1,
//       maxlength: 255,
//     },
//     yearsExperience: {
//         type: Number,
//         min: 1,
//         max: 100,
//       },
//     tel:{
//         type:Number
//     }
    
    
// })
// module.exports=mongoose.model("ProfileDoctor",ProfileDoctorSchema)