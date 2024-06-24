
import mongoose, { Schema, Document, Model } from 'mongoose';

interface Time extends Document {
    time: Date;
    isCatch: boolean;
}

const timeSchema: Schema = new Schema({
    time: Date,
    isCatch: Boolean,
});

const timetModel: Model<Time> = mongoose.model<Time>('times', timeSchema);

export { timetModel  , Time};