import express from "express";
import * as businessController from "../controllers/business.controller"


const businessRouter = express.Router();

businessRouter.post('/business', businessController.createBusiness);

businessRouter.get('/business',businessController.getBusiness );

businessRouter.put('/business/:id', businessController.updateBusiness);

businessRouter.delete('/business/:id', businessController.deleteBusiness );



export default businessRouter;
