
import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface Service extends Document {
    id : string ;
    price: number;
    name: string;
    duration : number; 
    countPhoto: number;
}

const serviceSchema: Schema = new Schema({
    id: {
        type: String,
        default: uuidv4, 
        unique: true
    },
    price: Number,
    name: String,
    duration : Number, 
    countPhoto: Number,
    
});

const servicetModel: Model<Service> = mongoose.model<Service>('services', serviceSchema);

export { servicetModel  , Service};