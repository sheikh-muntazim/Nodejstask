import mongoose from "mongoose";

const connectDB =async(dbUrl,dbName)=>{

    const DB_OPTIONS={
        dbName:dbName
    }
    try {
        await mongoose.connect(dbUrl,DB_OPTIONS)

        console.log('database connected successfully');
    } catch (error) {
        console.log('error occured while connecting to database');
    }
}

export default connectDB