//This file is for the database connection 
import mongoose,{ ConnectOptions } from "mongoose";
//import {ConnectionOptions} from "tls";
import config from "./config";
(async ()=> {
  try {
    const mongooseOptions: ConnectOptions = {
        // user: config.MONGO_USER,
        // pass: config.MONGO_PASSWORD
    } 
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,mongooseOptions);
    console.log('database is connected!! and connected to ',db.connection.name)
  } catch (error) {
    console.error(error)
  }
})()