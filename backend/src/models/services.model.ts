
import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface Service extends Document {
    id : string ;
    price: number;
    name: string;
    duration : number; 
    description: string;
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
    description: String,
});

serviceSchema.pre('save', function (next) {
    this.id = uuidv4();
    next();
});

const servicetModel: Model<Service> = mongoose.model<Service>('services', serviceSchema);

export { servicetModel  , Service};