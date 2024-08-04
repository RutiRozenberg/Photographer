import express from "express";
import * as meetingController from "../controllers/meeting.controller"
import { authorization } from "../middlewares/authorization.middleware";
import { currentUserAuthorization } from "../middlewares/user.authorization.middleware";

const meetingRouter = express.Router();

meetingRouter.get('/meeting/:id', authorization, meetingController.getMeetingById );
meetingRouter.get('/meetings', authorization, meetingController.getAllMeetings );
meetingRouter.post('/meeting' , currentUserAuthorization , meetingController.createMeeting);
meetingRouter.put('/meeting/:id', authorization,   meetingController.updateMeeting);
meetingRouter.delete('/meeting/:id',  authorization,  meetingController.deleteMeeting );

export default meetingRouter;
