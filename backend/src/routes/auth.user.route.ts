import express from "express";
import { postSignUp , postSignIn } from "../controllers/user.controller";


const authUserRouter = express.Router();

authUserRouter.post('/signup', postSignUp)
authUserRouter.post('/signin', postSignIn)


export default authUserRouter
