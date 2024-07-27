import express from "express";
import * as businessController from "../controllers/business.controller"
import { authorization } from "../middlewares/authorization.middleware";


const businessRouter = express.Router();

businessRouter.post('/business',authorization ,  businessController.createBusiness);
businessRouter.get('/business', businessController.getBusiness );
businessRouter.put('/business/:id',authorization,  businessController.updateBusiness);
businessRouter.delete('/business/:id', authorization, businessController.deleteBusiness );


export default businessRouter;
