import mongoose from "mongoose";
import env from "./env.config.js";

const dbConnection = async () => {
  try {
    const dbConnect = mongoose.connect(env.dburl);
    if (!dbConnect) {
      return console.log("DB can't connected.");
    }
    return console.log("DB connected successfully");
  } catch (err: any) {
    return console.log(`Something wrong, error: ${err.message}`);
  }
};

export default dbConnection;
