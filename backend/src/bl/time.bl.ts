import { Time } from "../models/time.model"
import * as timeService from "../services/time.service"


const getAllTimes = async () => {
    try {
        const times: Time[] = (await timeService.getAllTimes()) as unknown[] as Time[];
        if (times.length > 0) {
            return times;
        }
        else {
            throw new Error("Times does not found");
        }
    }
    catch {
        throw new Error("Faild");
    }
}

const getTimeById = async (id: string) => {
    try {
        const time: Time = (await timeService.getTimeById(id)) as unknown as Time;
        if (time == null) {
            throw new Error("Not found");
        }
        return time;
    }
    catch {
        throw new Error("Faild");

    }
}

const createTime = async (newTime: Time) => {
    if (newTime.date == null ) {
        throw new Error("Invalid time details");
    }
    try {
        return await timeService.createTime(newTime) as Time;
    }
    catch (err) {
        throw new Error("Time creation failed");
    }

}

const updateTime = async (id: string, time: Time) => {
    if (id != time.id) {
        throw new Error("Invalid parameters");
    }
    const timeToUpdate = (await timeService.getTimeById(id)) as unknown as Time;
    if (time.date) {
        timeToUpdate.date = time.date;
    }
    timeToUpdate.isCatch = time.isCatch;

    try {
        await timeService.updateTime(id, timeToUpdate);
    }
    catch (err) {
        throw new Error("The update failed");
    }
}


const deleteTime = async (id: string) => {
    try {
        await timeService.deleteTime(id);
    }
    catch {
        throw new Error("The deletion failed");
    }
}

const catchTime = async(id: string)=>{
    const timeToCatch = (await timeService.getTimeById(id)) as unknown as Time;
    if(!timeToCatch.isCatch)
    {
        timeToCatch.isCatch = true;
        await timeService.updateTime(id , timeToCatch);
    }
    else{
        throw new Error("Faild");
        
    }
}


export { getTimeById, getAllTimes, createTime, updateTime, deleteTime , catchTime} 
