
import { Meeting } from "../models/meeting.model"
import * as meetingService from "../services/meeting.service"
import { catchTime, getTimeById } from "./time.bl"
import { getServiceById } from "./service.bl";
import { Time } from "../models/time.model";
const getAllMeetings = async () => {
    try {
        const meetings: Meeting[] = (await meetingService.getAllMeeting()) as unknown[] as Meeting[];
        if (meetings.length > 0) {
            return meetings;
        }
        else {
            throw new Error("Meetings does not found");
        }
    }
    catch {
        throw new Error("Faild");
    }
}

const getMeetingById = async (id: string) => {
    try {
        const meeting: Meeting = (await meetingService.getMeetingById(id)) as unknown as Meeting;
        if (meeting == null) {
            throw new Error("Not found");
        }
        return meeting;
    }
    catch {
        throw new Error("Faild");
    }
}


const createMeeting = async (newMeeting: Meeting) => {
    try {
        if (newMeeting.timeId != null) {
            const time: Time = await getTimeById(newMeeting.timeId);
            if (newMeeting.serviceId != null && (await getServiceById(newMeeting.serviceId)) && !time.isCatch) {
                catchTime(time.id);
                return await meetingService.createMeeting(newMeeting) as Meeting;
            }
        }
        throw new Error("Invalid parameters");
    }
    catch (err) {
        throw new Error("Meeting creation failed");
    }
}

const updateMeeting = async (id: string, meeting: Meeting) => {
    if (id != meeting.id) {
        throw new Error("Invalid parameters");
    }
    const meetingToUpdate = (await meetingService.getMeetingById(id)) as unknown as Meeting;
    if (meeting.timeId && await getTimeById(meeting.timeId)) {
        meetingToUpdate.timeId = meeting.timeId;
    }
    if (meeting.serviceId && await getServiceById(meeting.serviceId)) {
        meetingToUpdate.serviceId = meeting.serviceId;
    }


    try {
        await meetingService.updateMeeting(id, meetingToUpdate);

    }
    catch (err) {
        throw new Error("The update failed");
    }
}


const deleteMeeting = async (id: string) => {
    try {
        await meetingService.deleteMeeting(id);
    }
    catch {
        throw new Error("The deletion failed");
    }
}


export { getMeetingById, getAllMeetings, createMeeting, updateMeeting, deleteMeeting } 
