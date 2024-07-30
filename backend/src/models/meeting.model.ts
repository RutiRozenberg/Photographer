
import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface Meeting extends Document {
  UserEmail: string;
  time: Date;
  description: string;
  businessId: string;
}

const meetingSchema: Schema = new Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  name: String,
  price: Number,
  time: Date,
  description: String,
});

const meetingtModel: Model<Meeting> = mongoose.model<Meeting>('meeting', meetingSchema);

export { meetingtModel, Meeting };