import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./features/tasks/taskSlice";



export const store = configureStore({
  reducer:{
   taskReducer:taskReducer.reducer
  }  //multiple reducer hoskty
})  //first configure stor