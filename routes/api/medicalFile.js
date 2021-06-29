
const express=require("express")
const router=express.Router();
const medicalFileController=require("../../controllers/medicalFileController")
const isAuth=require("../../middlewares/isAuth")

// http://localhost:5000/api/medicalFile/newFile
// create a medicalFile
// 
router.post("/newFile",isAuth,medicalFileController.createFile)

// http://localhost:5000/api/medicalFile
// get  files
// 
router.get("/",isAuth,medicalFileController. getfiles)

// http://localhost:5000/api/medicalFile:id
// get a medicalFile by id
// 
router.get("/:id",isAuth,medicalFileController.getProfileById)

//http://localhost:5000/api/medicalFile/deletemedicalFile/:idUser/:idmedicalFile
// delete medicalFile
// 
router.delete("/deletemedicalFile/:idUser/:idmedicalFile",isAuth,medicalFileController.deletemedicalFile)

// // http://localhost:5000/api/medicalFile/editmedicalFile/:id
// // edit medicalFile
// // 
router.put("/editmedicalFile/:id",isAuth,medicalFileController.editmedicalFile)


module.exports=router