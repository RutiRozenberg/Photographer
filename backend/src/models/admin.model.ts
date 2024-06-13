
import mongoose, { Schema , Model } from 'mongoose';
import { User } from './user.model';

interface Admin extends User {
    adminPassword : string;
}

const adminSchema: Schema = new Schema({
    adminPassword : String,
    name: String,
    email: String,
    password: String,
});

const adminModel: Model<Admin> = mongoose.model<Admin>('admin', adminSchema);

export { adminModel , Admin };