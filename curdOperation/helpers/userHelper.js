import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'


const generateJwtToken =async(email)=>{
    try {
        const user =await userModel({email})
        const token =jwt.sign({userID:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
        
    } catch (error) {
        
    }
    
}

export {generateJwtToken}