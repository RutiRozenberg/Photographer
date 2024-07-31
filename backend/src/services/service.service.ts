
import { Service, servicetModel } from "../models/services.model"


const createService = async (serviceData : Service)=>{
    try {
        const newService  = new servicetModel(serviceData);
        const savedService = await newService.save();
        return savedService;
    }catch (error) {
        throw new Error('Failed to save service to the database');
    }
}


const getAllServices = async () => {
    try{
        const services = await servicetModel.find().exec();
        return services;
    }
    catch{
        throw new Error("Failed to load service from the database");
        
    }
    
}


const getServiceById = async (id:string)=>{
    try{
        const service = await servicetModel.findOne({id});
        return service
    }
    catch{
        throw new Error("Not found");
        
    }
    
}


const updateService = async ( id :string , updatedData : Service ) => {
    try {
        const updatedObject = await servicetModel.updateOne({id} , updatedData);
        return updatedObject;
    } catch (error) {
        throw new Error('Failed to update service in the database');
    }
}


const deleteService = async (id:unknown) =>{
    try{        
        await servicetModel.deleteOne({id});
    }
    catch{
        throw new Error("The deletion failed");
    }
}


export { createService  , getAllServices , getServiceById,  updateService ,deleteService}