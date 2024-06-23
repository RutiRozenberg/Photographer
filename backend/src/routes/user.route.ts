import express from "express";
import { postSignUp , postSignIn } from "../controllers/user.controller";


const userRouter = express.Router();

userRouter.post('/signup', postSignUp)

userRouter.post('/signin', postSignIn)


export default userRouter



