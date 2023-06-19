import express from 'express'
import UserControllers from '../controllers/userController.js'


const userRouter =express.Router()

userRouter.post('/register',UserControllers.addUser)
export default userRouter