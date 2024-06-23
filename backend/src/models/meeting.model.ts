
import mongoose, { Schema, Document, Model } from 'mongoose';

interface Meeting extends Document {
  name: string;
  price: number;
  time: Date;
  description: string
}

const meetingSchema: Schema = new Schema({
    name: String,
    price: Number,
    time: Date,
    description: String,
});

const meetingtModel: Model<Meeting> = mongoose.model<Meeting>('meeting', meetingSchema);

export { meetingtModel  ,Meeting};