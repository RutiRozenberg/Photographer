
import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface Business extends Document {
    id: string;
    address: string;
    name: string;
    email: string;
    phone: string;
}

const businessSchema: Schema = new Schema({
    id: {
        type: String,
        default: uuidv4, 
        unique: true
    },
    address: String,
    name: String,
    email: String,
    phone: String
});

const businesstModel: Model<Business> = mongoose.model<Business>('busniess', businessSchema);

export { businesstModel  ,Business};