
import { Meeting, meetingModel } from "../models/meeting.model"


const createMeeting = async (meetingData : Meeting)=>{
    try {
        const newMeeting  = new meetingModel(meetingData);
        const savedMeeting = await newMeeting.save();
        return savedMeeting;
    }catch (error) {
        throw new Error('Failed to save meeting to the database');
    }
}


const getAllMeeting = async () => {
    try{
        const meeting = await meetingModel.find().exec();
        return meeting;
    }
    catch{
        throw new Error("Failed to load meeting from the database");
        
    }
    
}


const getMeetingById = async (id:string)=>{
    try{
        const meeting = await meetingModel.findOne({id});
        return meeting
    }
    catch{
        throw new Error("Not found");
        
    }
    
}


const updateMeeting = async ( id :string , updatedData : Meeting ) => {
    try {
        const updatedObject = await meetingModel.updateOne({id} , updatedData);
        return updatedObject;
    } catch (error) {
        throw new Error('Failed to update meeting in the database');
    }
}


const deleteMeeting = async (id:unknown) =>{
    try{        
        await meetingModel.deleteOne({id});
    }
    catch{
        throw new Error("The deletion failed");
    }
}


export { createMeeting  , getAllMeeting , getMeetingById,  updateMeeting ,deleteMeeting}