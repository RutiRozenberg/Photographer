
import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


interface User extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  id: {
    type: String,
    default: uuidv4, 
    unique: true
},
  name: String,
  email: String,
  password: String,
});

const userModel: Model<User> = mongoose.model<User>('user', userSchema);

export { userModel , User};