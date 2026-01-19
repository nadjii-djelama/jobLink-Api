import dotenv from "dotenv";
dotenv.config();

const env = {
  port: Number(process.env.PORT),
  dburl: process.env.DB_URI!,
};

export default env;
