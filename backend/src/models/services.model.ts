
import mongoose, { Schema, Document, Model } from 'mongoose';

interface Service extends Document {
    id : string ;
    price: number;
    name: string;
    duration : number; 
    countPhoto: number;
}

const serviceSchema: Schema = new Schema({
    id : String ,
    price: Number,
    name: String,
    duration : Number, 
    countPhoto: Number,
    
});

const servicetModel: Model<Service> = mongoose.model<Service>('services', serviceSchema);

export { servicetModel  , Service};