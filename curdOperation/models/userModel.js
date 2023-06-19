
import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{type:String,trim:true},
    email:{type:String,trim:true},
    phoneNumber:{type:Number,required:true,trim:true,validate:[(v)=>v.toString().length>=10,"length shoud be more than 10"]},
    password:{type:String,trim:true}
})

const userModel=mongoose.model('users',userSchema)

export default userModel