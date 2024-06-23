
import bcrypt from 'bcryptjs';


const saltRounds = 10;


const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, saltRounds);
}

const comparePassword = async (inputPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(inputPassword, hashedPassword);
}

export {hashPassword , comparePassword}
