
import { Business, businesstModel } from "../models/business.model"


const createBusiness = async (BusinessData : Business)=>{
    try {
        const newBusiness = new businesstModel(BusinessData);
        const savedBusiness = await newBusiness.save();
        return savedBusiness;
    }catch (error) {
        throw new Error('Failed to save business to the database');
    }
}


const getBusiness = async () => {
    const business = await businesstModel.find().exec();
    return business[0];
}


const updateBusiness = async ( updatedData : Business ) => {
    try {
        const businessObject:Business = (await getBusiness() ) as unknown as Business;
        const email = businessObject.email;
        await businesstModel.updateOne( {email} , updatedData);
        return await getBusiness();
    } 
    catch {
        throw new Error('Failed to update business in the database');
    }
}


const deleteBusiness = async (email:string) =>{
    try{        
        await businesstModel.deleteOne({email});
    }
    catch{
        throw new Error("The deletion failed");
    }
}


export { createBusiness  , getBusiness , updateBusiness ,deleteBusiness}