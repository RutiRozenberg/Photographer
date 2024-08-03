import express from "express";
import * as timeController from "../controllers/time.controller";
import { authorization } from "../middlewares/authorization.middleware";


const timeRouter = express.Router();

timeRouter.get('/time/:id', timeController.getTimeById);
timeRouter.get('/times' , timeController.getAllTimes);
timeRouter.post('/time' , authorization , timeController.createTime);
timeRouter.put('/time/:id' , authorization , timeController.updateTime);
timeRouter.put('/time/:id/catch' , timeController.catchTime);
timeRouter.delete('/time/:id' , authorization , timeController.deleteTime);

export default timeRouter ;
