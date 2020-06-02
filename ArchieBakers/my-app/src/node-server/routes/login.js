const express = require('express');
const User = require('../Models/User');
const cors =require('cors');
const router = new express.Router();
const bcrypt = require('bcryptjs')


router.post('/login',cors(), async(req,res)=>{
    
    console.log("HERE");
    
    const userAttempt =req.body;
    const email=userAttempt["email"];
    const password = userAttempt["password"];
    console.log(password)
    
    try{
       
        const user = await User.findOne({email})
        
        const isMatch = await bcrypt.compare(password,user["password"])
        
        if(isMatch){
            const name =user["name"];
            const address = user["address"];
            const address2=user["address2"];
            const resData={
                name:name,
                address:address,
                address2:address2

              
            }
            console.log("Sending")
            console.log(user["password"]);
            res.send(JSON.stringify(resData))
            
        }
        else{
            console.log("Wrong password");
            res.sendStatus(400);
        }
        

        
    }catch(e){
        console.log("WRONG PASSWORD");
        res.sendStatus(400);
    }
    
    
    
})




module.exports=router;