const express = require('express')
const { User } = require('../database/db')
const jwt= require("jsonwebtoken")


const router=express.Router()

router.get('/',(req,res)=>{
  res.send('Hello User!')
})

router.post('/login',async(req,res)=>{
  const {email,password} = req.body
 const user= await User.findOne({email,password})
 if (user){
    const token = jwt.sign({email,password},process.env.SECERT_KEY,{expiresIn:"240h"})
    res.status(200).json({message:"login success",token})
 }
 else{
    res.status(400).json({message:"user not found"})
 }

})

router.post('/signUp',async(req,res)=>{
 const {name,email,contactNumber,password,accountType, courses,profile,courseProgress} = req.body
 const user= await User.findOne({email})
 if (user){
    res.status(400).json({message:"User already exists"})
 }
 else{
    const newUser= await User.create({name,email,contactNumber,password,accountType, courses,profile,courseProgress})
    const token=  jwt.sign({email,password},process.env.SECERT_KEY,{expiresIn:"240h"})
    if(newUser && token){
       res.status(200).json({message: "user Created successfully ",token}) 
    }
 }
})

module.exports=router