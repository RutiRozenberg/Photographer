
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

const envPath = path.join(__dirname, '../config', '.env');
dotenv.config({ path: envPath });

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