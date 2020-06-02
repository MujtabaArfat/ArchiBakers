const mongoose=require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs')
const PersonSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    
    email:{
        type:String,
        required:true,
        validate(value){
            if(validator.isEmail(value)==false){
                throw new Error("Email is invalid");
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(value.toLowerCase().includes("password"))
            {
                throw new Error("Password cannot include password");
            }
        }
    },
    address:{
        type:String,
        required:true,
        trim:true
        },
    address2:{
            type:String,
            required:true,
            trim:true
        },
    city:{
            type:String,
            required:true,
            trim:true
        },
    state:{
            type:String,
            required:true,
            trim:true
        },
    zip:{
        type:Number,
        required:true,
         
        },
    
    
})

PersonSchema.pre('save',async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
})


const Person= mongoose.model('Person',PersonSchema);

module.exports = Person;