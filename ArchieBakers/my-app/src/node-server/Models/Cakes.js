const mongoose= require("mongoose");
const validator = require('validator');

const CakeSchema = new mongoose.Scheme({
    title:{
        type: String
    
    },
    price:{
        type:Number
    },
    body:{
        type:String
    }
})


const Cakes=mongoose.model('Cakes',CakeSchema);

module.exports=Cakes;