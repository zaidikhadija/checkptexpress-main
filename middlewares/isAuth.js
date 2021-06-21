//require json web token
const jwt= require('jsonwebtoken');
//require the user schema
const User=require('../models/User')

//declaration of middleware isAuth
const isAuth=async(req,res,next)=>{
try {
    const token =req.headers['x-auth-token']
    //check for token 
    if(!token ){
        return res.status(401).send({msg:'No token authorization denied'})
    }

    //decoded token
    const decoded=await jwt.verify(token,process.env.SecretOrKey)
    //add user from payload
    const user=await User.findById(decoded.id)
    //check for user
    if(!user){
        return res.status(401).send({msg:'No token authorization denied'})
    }
    req.user=user
    next()
} catch (error){return res.status(400).send({msg:"Token is not valid"})
}

}
module.exports=isAuth;