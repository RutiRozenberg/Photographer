
import { Request , Response , NextFunction } from "express";


const  CheckBody =(req :Request, res :Response, next :NextFunction)=>{
    if((req.method=='PUT' || req.method=='POST') && Object.keys(req.body).length==0){
        res.status(400).send('please send body');
    }
    else{
        next();
    }
}
export { CheckBody }
