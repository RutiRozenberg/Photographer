import express from "express";
import * as timeController from "../controllers/time.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { authentication } from "../middlewares/authentication.middleware";


const timeRouter = express.Router();

timeRouter.get('/time/:id', authentication , timeController.getTimeById);
timeRouter.get('/times' , timeController.getAllTimes);
timeRouter.post('/time' , authentication , authorization , timeController.createTime);
timeRouter.put('/time/:id' , authentication, authorization , timeController.updateTime);
timeRouter.put('/time/:id/catch' , authentication, timeController.catchTime);
timeRouter.delete('/time/:id' , authentication , authorization , timeController.deleteTime);

export default timeRouter ;
