
import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface Meeting extends Document {
  id: string;
  userId: string;
  timeId: string;
  serviceId: string;
  textMessage: string;
}

const meetingSchema: Schema = new Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  userId: String,
  timeId: String,
  serviceId: String,
  textMessage: String,
});

meetingSchema.pre('save', function (next) {
  this.id = uuidv4();
  next();
});

const meetingModel: Model<Meeting> = mongoose.model<Meeting>('meeting', meetingSchema);

export { meetingModel, Meeting };