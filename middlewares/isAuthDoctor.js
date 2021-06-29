// //require json web token
// const jwt= require('jsonwebtoken');
// //require the doctor schema
// const Doctor=require('../models/Doctor')

// //declaration of middleware isAuth
// const isAuthDoctor=async(req,res,next)=>{
// try {
//     const token =req.headers['x-auth-token']
//     //check for token 
//     if(!token ){
//         return res.status(401).send({msg:'No token authorization denied'})
//     }

//     //decoded token
//     const decoded=await jwt.verify(token,process.env.SecretOrKey)
//     //add doctor from payload
//     const doctor=await Doctor.findById(decoded.id)
//     //check for doctor
//     if(!doctor){
//         return res.status(401).send({msg:'No token authorization denied'})
//     }
//     req.doctor=doctor
//     next()
// } catch (error){return res.status(400).send({msg:"Token is not valid"})
// }

// }
// module.exports=isAuthDoctor;