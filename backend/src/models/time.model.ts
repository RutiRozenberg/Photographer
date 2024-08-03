
import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface Time extends Document {
    date: Date;
    isCatch: boolean;
    id: string;
}

const timeSchema: Schema = new Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    date: Date,
    isCatch: Boolean,
});

timeSchema.pre('save', function (next) {
    this.id = uuidv4();
    next();
});

const timetModel: Model<Time> = mongoose.model<Time>('times', timeSchema);

export { timetModel, Time };