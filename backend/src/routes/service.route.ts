import express from "express";
import * as serviceController from "../controllers/service.controller"
import { authorization } from "../middlewares/authorization.middleware";

const serviceRouter = express.Router();

serviceRouter.get('/service/:id', serviceController.getServiceById );
serviceRouter.get('/services', serviceController.getAllServices );
serviceRouter.post('/service' , authorization,  serviceController.createService);
serviceRouter.put('/service/:id',authorization,   serviceController.updateService);
serviceRouter.delete('/service/:id',  authorization,  serviceController.deleteService );

export default serviceRouter;
