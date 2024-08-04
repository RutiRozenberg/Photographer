import express from "express";
import * as userController from "../controllers/user.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { currentUserAuthorization } from "../middlewares/user.authorization.middleware";


const userRouter = express.Router();

userRouter.get('/user/:id',currentUserAuthorization,  userController.getUserById);
userRouter.get('/users' , authorization , userController.getAllUsers);
userRouter.put('/user/:id' ,currentUserAuthorization,  userController.updateUser);

export default userRouter ;
