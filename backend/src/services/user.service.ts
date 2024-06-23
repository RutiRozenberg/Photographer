
import { userModel, User } from '../models/user.model'; 

const createUser = async (userData: User): Promise<User> => {
  try {
    const newUser = new userModel(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error('Failed to save user to the database');
  }
};


const getUserByEmail = async (email: string): Promise<User | null> => {
    try {
      const user = await userModel.findOne({ email });
      return user;
    } catch (error) {
      throw new Error('Failed to fetch user from the database');
    }
};


const getAllUsers = async () :Promise<User[] | undefined> => {
  const users = await userModel.find().exec();
  return users;
}



export { createUser , getUserByEmail , getAllUsers}
