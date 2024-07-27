
import mongoose, { Schema, Document, Model } from 'mongoose';

interface Business extends Document {
    address: string;
    name: string;
    email: string;
    phone: string;
}

const businessSchema: Schema = new Schema({
    address: String,
    name: String,
    email: String,
    phone: String
});

const businesstModel: Model<Business> = mongoose.model<Business>('busniess', businessSchema);

export { businesstModel  ,Business};