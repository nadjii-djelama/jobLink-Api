import express from "express";
import env from "./configs/env.config.js";
import dbConnection from "./configs/db.config.js";
const app = express();

const server = async () => {
  try {
    await dbConnection();
    app.listen(env.port, () => {
      console.log(`Server run in port http://localhost:${env.port}`);
    });
  } catch (err: any) {
    console.log(`Error: ${err.message}`);
  }
};

server();
