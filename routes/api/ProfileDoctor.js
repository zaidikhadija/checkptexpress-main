// const express=require("express");
// const router=express.Router();
// const ProfileDoctorController=require("../../controllers/ProfileDoctorController")
// const isAuthDoctor=require("../../middlewares/isAuthDoctor")

// // http://localhost:5000/api/ProfileDoctor/newProfile
// // create a profileDoctor
// // 
// router.post("/newProfile",isAuthDoctor,ProfileDoctorController.createProfileDoctor)

// // http://localhost:5000/api/ProfileDoctor/
// // get a profiles
// // 
// router.get("/",isAuthDoctor,ProfileDoctorController.getProfile)

// // http://localhost:5000/api/ProfileDoctor/:id
// // get a profile by id
// // 
// router.get("/:id",isAuthDoctor,ProfileDoctorController.getProfileDoctorById)

// // http://localhost:5000/api/ProfileDoctor/deleteProfile/:id
// // delete profile
// // 
// router.delete("/deleteProfile/:id",isAuthDoctor,ProfileDoctorController.deleteProfile)

// // http://localhost:5000/api/ProfileDoctor/editProfile/:id
// // edit profile
// // 
// router.put("/editProfileDoctor/:id",isAuthDoctor,ProfileDoctorController.editProfileDoctor)


// module.exports=router