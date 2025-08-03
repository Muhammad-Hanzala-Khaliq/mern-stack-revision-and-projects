import express from 'express';
import userRouter from './router/users.js'
import { connectDB } from './data/database.js';
import {config} from "dotenv";
config({
  path:"./data/config.env"
})
const app = express();


app.use(express.json())
connectDB()

app.use("/users/",userRouter)

app.listen(4000,() => {
  console.log('Server is working')
})


// 