import * as dotenv from 'dotenv';
dotenv.config();

const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

console.log('Database URL:', dbUrl);
console.log('API Key:', apiKey);
