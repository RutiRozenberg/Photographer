
import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface Time extends Document {
    time: Date;
    isCatch: boolean;
}

const timeSchema: Schema = new Schema({
    id: {
        type: String,
        default: uuidv4, 
        unique: true
    },
    time: Date,
    isCatch: Boolean,
});

const timetModel: Model<Time> = mongoose.model<Time>('times', timeSchema);

export { timetModel  , Time};