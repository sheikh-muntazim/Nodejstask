import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import UserServices from "../services/userService.js";
import { generateJwtToken } from "../helpers/userHelper.js";


class UserControllers {
    static addUser =async(req,res)=>{
        const {name,email,phoneNumber,password}=req.body;
        if (name && email && phoneNumber && password) {
            try {
                const user = await userModel.findOne({email})
                if (!user) {
                    //password converting to hash code

                    const hashPassword =await bcrypt.hash(password,10)

                    //adding user to database
                   const status=await UserServices.createUser(name,email,phoneNumber,hashPassword)
                   console.log(status);
                   if (status ==true) {
                    const token =await generateJwtToken(email)
                       res.send({"status":"success","message":"Registration successfully",token})
                   } else {
                    res.send({"status":"failed","message":"While Registring","error":status.message})
                    
                   }
                } else {
                    res.send({"status":"failed","message":"Email id already exist"})

                }   
            } catch (error) {
                
            }
            
    
        } else {
            res.send({"status":"failed","message":"All fields are required"})
        }
    }
}

export default UserControllers