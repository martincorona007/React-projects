//This file is for properties of the app configutation 
import dotenv from 'dotenv';
dotenv.config()// read .env file
//process.env  access to the system and get the variables
console.log(process.env.HELLO);
export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD ||'admin',
  MONGO_HOST: process.env.MONGO_HOST ||'localhost',
  PORT: process.env.PORT || 3000 
}