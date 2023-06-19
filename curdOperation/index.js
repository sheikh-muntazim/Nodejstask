import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import connectDB from './config/connectionDB.js'

dotenv.config()
const app =express()

const PORT =process.env.PORT
const DBNAME=process.env.DBNAME
const DBURL=process.env.DBURL
app.use(express.json())

connectDB(DBURL,DBNAME)
app.use('/api/user',userRouter)


app.listen(PORT,()=>{
    console.log(`server started at port number ${PORT}`);
})