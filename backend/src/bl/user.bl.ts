
import { User } from "../models/user.model";
import { comparePassword, hashPassword } from "./bcrypt.bl";
import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';
import { createUser, getUserByEmail } from "../services/user.service";


const envPath = path.join(__dirname, '../config', '.env');
dotenv.config({ path: envPath });


const signup = async (email: string, password: string, name: string) => {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        throw new Error('User with this email already exists');
    }
    try{
        const hashedPassword = await hashPassword(password);
        const newUser: User = {
            email,
            password : hashedPassword,
            name,
        } as User;
        const user = await createUser(newUser);
        return user;
    }
    catch(err){
        throw new Error('Something went wrong... try again');
    }
   
}


const signin = async (email :string , password :string ) => {
    const user: User | null = await getUserByEmail(email);
    if( user && await comparePassword(password, user.password)){
        return await createToken(user.email , user.password , false);
    }
    return null;
}


const createToken = async(email : string , name: string , isAdmin:boolean)=>{
    const secret:string | undefined = process.env.SECRET;
    if(secret){
        const token = jwt.sign({ _id: email, name , isAdmin},
            secret, {
                expiresIn: "2h",
            }
        )
        return token;
    }
    return null;
}


export {signup , signin , createToken}
