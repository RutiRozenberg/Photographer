import express from "express";
import { adminSignIn, adminSignUp } from "../controllers/admin.controller";


const adminRouter = express.Router();

adminRouter.post('/admin/signup', adminSignUp)

adminRouter.post('/admin/signin', adminSignIn)


export default adminRouter
