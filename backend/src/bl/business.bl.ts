
import  { Business }  from "../models/business.model"
import * as businessService from "../services/business.service"


const getBusiness =async ()=>{
    try{
        const business:Business = (await businessService.getBusiness()) as unknown as Business;
        if(business){
            return business ;
        }
        else{
            throw new Error("Business does not exist");
        }
    }
    catch{
        throw new Error("Faild");     
    }
}

const createBusiness = async (newBusiness: Business)=>{
    if( newBusiness.name == null || 
        newBusiness.address == null || 
        newBusiness.email == null || 
        newBusiness.phone == null )
        {
            throw new Error("Invalid business details");
            
        }

    try{
        return await businessService.createBusiness(newBusiness) as Business;
    }
    catch(err){
        throw new Error("Business creation failed");
    }
    
}

const updateBusiness = async (email :string , business: Business)=> {
    if(email != business.email ){
        throw new Error("Invalid parameters");
    }
    try{
        const businessToUpdate = ( await getBusiness())  as unknown as Business;
        if(business.name){
            businessToUpdate.name =business.name;
        }
        if(business.address){
            businessToUpdate.address = business.address;
        }
        if(business.phone){
            businessToUpdate.phone= business.phone;
        } 
    
        try{
            return await businessService.updateBusiness(businessToUpdate);
        }
        catch(err){
            throw new Error("The update failed");
        }
    }
    catch{
        throw new Error("Not Found"); 
    }
    
}


const deleteBusiness = async (email: string)=>{
    const business:Business =  (await getBusiness()) as unknown as Business;
    if(business.email != email){
        throw new Error("No permissions");
    }
    try{
        await businessService.deleteBusiness(email);
    }
    catch{
        throw new Error("The deletion failed");
    }
}


export { getBusiness , createBusiness , updateBusiness , deleteBusiness } 
