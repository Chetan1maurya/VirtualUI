import express from 'express'
import isAuth from '../middlewares/isAuth.js'
import { getAllUser, getCurrentUser } from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.get("/current-user", isAuth, getCurrentUser)
userRouter.get("/all-users", getAllUser);

export default userRouter