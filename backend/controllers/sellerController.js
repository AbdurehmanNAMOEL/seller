const asyncHandler= require('express-async-handler')
const bt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const signUp =asyncHandler(async(req,res)=>{
   const {name,email,password,confirmPassword,phoneNumber,profileImage} =req.body
       
      const user = await User.findOne({email})
       
        if(user){
          res.status(400).json({message:"user already exist"})
        }else{
        const salt= await bt.genSalt() 
        const hashedPassword = await bt.hash(password,salt)
        const newUser = await User.create({ name,email,password:hashedPassword,confirmPassword,phoneNumber,profileImage})
        const token = jwt.sign({id:newUser._id},process.env.SECRETE_KEY,{expiresIn:'1d'})
        res.status(200).json({user:newUser,token})
    
      
        }
    }
)


const signIn = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        res.status(404).json({error:"User doesn't exist"})
    }
    if(!(await bt.compare(password,user.password))){
        res.status(401).json({error:"Invalid Password"})
    }else {
        const token = jwt.sign({id:user._id},process.env.SECRETE_KEY,{expiresIn:'30d'})
        res.status(200).json({user,token})
    }
})


const getUser = asyncHandler(async(req,res)=>{
  
    const user = await User.findById(req.userId)
    if(!user){
        res.status(404).json({error:"User doesn't exist"})
    }else{
           const userData = {
            name:user.name,
            email:user.email,
            profileImage:user.profileImage
           }
         res.status(200).json(userData)
    }
    
})

const updatePassword = asyncHandler(async(req,res)=>{
    const {email,password,confirmPassword} = req.body
    const user = await User.findOne({email})
    if(!user){
        res.status(404).json({error:"User doesn't exist"})
    }   const updatedPassWord = await User.findByIdAndUpdate(user._id,{password,confirmPassword},{new:true})
        res.status(200).json(updatedPassWord)
    
})


module.exports ={ signUp,signIn,updatePassword,getUser}