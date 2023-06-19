import userModel from "../models/userModel.js"

class UserServices {
    static createUser=async(name,email,phoneNumber,password)=>{
        const doc =new userModel({name,email,phoneNumber,password})
        try {
            await doc.save()
            return true
        } catch (error) {
            console.log(error);
            return error
        }
    }
}



export default UserServices