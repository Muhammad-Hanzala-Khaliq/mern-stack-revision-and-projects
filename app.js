import express from 'express';
import userRouter from './router/users.js'
import taskRouter from "./router/task.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
config({
  path: "./data/config.env",
});
const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);


app.listen(4000,() => {
  console.log('Server is working')
})


// 