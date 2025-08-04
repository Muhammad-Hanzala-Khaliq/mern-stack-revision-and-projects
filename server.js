import express from 'express';
import userRouter from './router/users.js'
import taskRouter from "./router/task.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
config({
  path: "./data/config.env",
});
const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, //allow for cookies
  })
);
// error handling
app.use(errorMiddleware);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.listen(4000, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});


// 