const mongoose = require("mongoose");
const express = require('express');
const User = require('../Models/User');
const cors =require('cors');
const router = new express.Router();



router.post('/SignUp',cors(), async (req,res)=>{
    console.log(req.body);
    const user = await new User(req.body);
    user.save();
    
    
   
})

module.exports=router;