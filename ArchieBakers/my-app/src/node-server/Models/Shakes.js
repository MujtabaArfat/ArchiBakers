const mongoose= require("mongoose");
const validator=require("validator");

const ShakesSchema= new mongoose.Schema({
    title:{
        type: String,
        required:true
    
    },
    price:{
        type:Number,
        required:true
    },
    body:{
        type:String
    }
});

const Shakes = mongoose.model('Shakes',ShakesSchema);

module.exports=Shakes;