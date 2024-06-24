
import mongoose, { Schema, Document, Model } from 'mongoose';

interface Business extends Document {
    adress: string;
    name: string;
    email: string;
    phone: string;
}

const busniessSchema: Schema = new Schema({
    adress: String,
    name: String,
    email: String,
    phone: String
});

const busniesstModel: Model<Business> = mongoose.model<Business>('busniess', busniessSchema);

export { busniesstModel  ,Business};