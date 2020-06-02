const mongoose =require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/ArchiBaker',{useNewUrlParser:true,useCreateIndex:true},(err,res)=>{
    if(err)
        console.log("FAILED TO CONNECT")
    else
        console.log("Connection established")

    })


