import { Time, timetModel } from "../models/time.model";


const createTime = async (timeData:Time) =>{
    const newTime = new timetModel(timeData);
    const savedTime = await newTime.save();
    return savedTime;
}

const getAllTimes = async ()=>{
    try{
        return  await timetModel.find().exec()
    }catch{
        throw new Error("Failed to load times from the database");
        
    }
}

const getTimeById = async (id:string)=> {
    try {
        return await timetModel.findOne({id});
    } catch {
        throw new Error("Failed to load time from the database");
    }
}


const updateTime = async (id:string , updatedData:Time) =>{
    try {
        return await timetModel.updateOne({id}, updatedData);
    } catch {
        throw new Error("Failed to update time");

    }
}

const deleteTime= async (id:string)=>{
    try {
        await timetModel.deleteOne({id});
    } catch  {
        throw new Error("The deletion failed");
    }
}



export { createTime  , getAllTimes , getTimeById,  updateTime ,deleteTime}

