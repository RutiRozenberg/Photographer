
import { Business, busniesstModel } from "../models/business.model"


const createBusiness = async (BusinessData : Business)=>{
    try {
        const newBusiness = new busniesstModel(BusinessData);
        const savedBusiness = await newBusiness.save();
        return savedBusiness;
    }catch (error) {
        throw new Error('Failed to save business to the database');
    }
}


const getBusiness = async () => {
    const business = await busniesstModel.find().exec();
    return business;
}


const updateBusiness = async ( updatedData : Business ) => {
    try {
        const businessObject:Business = (await getBusiness() ) as unknown as Business;
        const id = businessObject.email;
        await busniesstModel.findByIdAndUpdate(id , updatedData);
    } catch (error) {
        throw new Error('Failed to update business in the database');
    }
}
const deleteBusiness = async (email:string) =>{
    try{        
        const result:unknown = await busniesstModel.findByIdAndDelete(email);
        return result ;
    }
    catch{
        throw new Error("The deletion failed");
    }
}


export { createBusiness  , getBusiness , updateBusiness ,deleteBusiness}