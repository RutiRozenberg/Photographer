
import mongoose, { Schema, Document, Model } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  name: String,
  email: String,
  password: String,
});

const userModel: Model<User> = mongoose.model<User>('user', userSchema);

export { userModel , User};