
import mongoose, { Schema, Document, Model } from 'mongoose';

interface Meeting extends Document {
  UserEmail: string;
  time: Date;
  description: string;
  businessId: string;
}

const meetingSchema: Schema = new Schema({
    name: String,
    price: Number,
    time: Date,
    description: String,
});

const meetingtModel: Model<Meeting> = mongoose.model<Meeting>('meeting', meetingSchema);

export { meetingtModel  ,Meeting};