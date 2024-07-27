import express from "express";
import { adminSignIn, adminSignUp } from "../controllers/admin.controller";


const authAdminRouter = express.Router();

authAdminRouter.post('/admin/signup', adminSignUp)
authAdminRouter.post('/admin/signin', adminSignIn)


export default authAdminRouter
