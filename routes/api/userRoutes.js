const express=require ("express");
const User = require("../../models/User");

//require router
const router=express.Router()

//require bcrypt
const bcrypt=require('bcrypt');
//require Token
const jwt=require('jsonwebtoken')

//require schema userRoutes
const schema=require("../../models/User")
//require validator
const {registerRules,loginRules,validator}=require('../../middlewares/validator')
//require middleware isAuth
const isAuth=require('../../middlewares/isAuth')


//******Routes**********
//@path  http://localhost:5000/api/users/registre
//metode post registre user
//@accés public or private
router.post("/registre",registerRules(),validator,async(req,res)=>{
    const {name,lastName,email,password}=req.body
    try {
        // //simple validator
        // if(!name ||!lastName ||!email ||!password){
        // return res.status(400).json({msg:"please enter all fileds"})}

        //check exsting user
        let user = await User.findOne({email})
        if(user){
         return res.status(400).json({msg:"User already exits !",user})
        }
        //create new user 
        user=new User({name,lastName,email,password})
        //create salt & hash
        const salt=10
        const hashedPassword= await bcrypt .hash(password,salt)
        //replace the user's password with hashed password
        user.password= hashedPassword;

        //save user
        await user.save();
        //sign the user
        const payload={
            id:user._id,
            name:user.name,
            lastName:user.name,

        }
        //Generate Token
        const token = await jwt.sign(payload,process.env.SecretOrKey,{expiresIn:'7 days',})

        
        res.status(200).send({msg:"User registred with sucess",user,token})
    } catch (error) {res.status(500).send({msg:"server errors"})}

        
    
})
//@path  http://localhost:5000/api/users/login
//metode post login user
//@accés public or private
router.post('/login',loginRules(),validator, async(req,res)=>{
    const {email,password}=req.body
    try {
        //simple validator
        // if(!email ||!password){
        //     return res.status(400).json({msg:'Please enter all fileds!'})
        // }
        //check existing user
        let user =await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:'Bad Credentiels email!'})

        }
        //check password
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){ // cad is match false cad les mots de passe sont différents
       return res.status(400).json({msg:"Bad credentiels password!"})}
       //sign the user
  const payload ={
      id:user._id,
      name:user.name,
      lastName:user.lastName,
      email:user.email,
  
  }
  //Generate Token 
  const token =await jwt.sign(payload,process.env.secretOrKey,{
      expiresIn:'7 days',
  })
       res.send({msg:"user logedd with success ",user,token})
  
      } catch (error) {res.status(500).json({msg:"server errors"})
          
      }
      
  })

//@path  http://localhost:5000/api/users/authUser
//get authentified user
//@accés private
router.get('/authUser',isAuth,(req,res)=>{
    
        res.status(200).send({user:req.user})
  
        
    });



module.exports=router;
