import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect_url = process.env.DB_URL;

mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(connect_url || '');
    console.log('Connected');
  } catch (error) {
    console.error('Failed', error);
    process.exit(1);
  }
}