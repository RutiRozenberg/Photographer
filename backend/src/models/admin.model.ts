
import mongoose, { Schema , Model } from 'mongoose';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';


interface Admin extends User {
    adminPassword : string;
}

const adminSchema: Schema = new Schema({
    id: {
        type: String,
        default: uuidv4, 
        unique: true
    },
    adminPassword : String,
    name: String,
    email: String,
    password: String,
});

const adminModel: Model<Admin> = mongoose.model<Admin>('admin', adminSchema);

export { adminModel , Admin };