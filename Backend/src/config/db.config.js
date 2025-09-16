import mongoose from "mongoose";
import dotenv from "dotenv"
import { db } from "../utils/constant.js";

dotenv.config({quiet:true});
// if(!process.env.MONGO_DB_URL){
//     throw new Error("Please Provide Mongo DB Url in .env File");
// }

const ConnectDB = async () => {
  try {
    const DB = await mongoose.connect(db.MONGO_DB_URL);
    console.log(`MongoDB connected: ${DB.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // process.exit(1); // Exit process with failure
  }
}

export default ConnectDB;
