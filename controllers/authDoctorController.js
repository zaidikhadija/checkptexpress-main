// const Doctor=require("../models/Doctor")
// const bcrypt=require("bcrypt")
// const jwt=require("jsonwebtoken")
// module.exports={
//     registre:async(req,res)=>{
//     const {name,lastName,email,password,role}=req.body
//     try {
//         // //simple validator
//         // if(!name ||!lastName ||!email ||!password){
//         // return res.status(400).json({msg:"please enter all fileds"})}

//         //check exsting user
//         let doctor = await Doctor.findOne({email})
//         if(doctor){
//          return res.status(400).json({msg:"Doctor already exits !",doctor})
//         }
//         //create new user 
//         doctor=new Doctor({name,lastName,email,password})
//         //create salt & hash
//         const salt=10
//         const hashedPassword= await bcrypt .hash(password,salt)
//         //replace the user's password with hashed password
//         doctor.password= hashedPassword;

//         //save user
//         await doctor.save();
//         //sign the user
//         const payload={
//             id:doctor._id,
//             name:doctor.name,
//             lastName:doctor.name,

//         }
//         //Generate Token
//         const token = await jwt.sign(payload,process.env.SecretOrKey,{expiresIn:'7 days',})

        
//         res.status(200).send({msg:"Doctor registred with sucess",doctor,token})
//     } catch (error) {res.status(500).send({msg:"server errors"})}
// },


//     login:async(req,res)=>{
//         const {email,password}=req.body
//     try {
//         //simple validator
//         // if(!email ||!password){
//         //     return res.status(400).json({msg:'Please enter all fileds!'})
//         // }
//         //check existing user
//         let doctor =await Doctor.findOne({email})
//         if(!doctor){
//             return res.status(400).json({msg:'Bad Credentiels email!'})

//         }
//         //check password
//         const isMatch=await bcrypt.compare(password,doctor.password)
//         if(!isMatch){ // cad is match false cad les mots de passe sont différents
//        return res.status(400).json({msg:"Bad credentiels password!"})}
//        //sign the user
//   const payload ={
//       id:doctor._id,
//       name:doctor.name,
//       lastName:doctor.lastName,
//       email:doctor.email,
  
//   }
//   //Generate Token 
//   const token =await jwt.sign(payload,process.env.secretOrKey,{
//       expiresIn:'7 days',
//   })
//        res.send({msg:"doctor logedd with success ",doctor,token})
  
//       } catch (error) {res.status(500).json({msg:"server errors"})
          
//     }
// },
// getauthDoctor:(req,res)=>{
//     res.json({doctor:req.doctor})
// }

// }
      
  