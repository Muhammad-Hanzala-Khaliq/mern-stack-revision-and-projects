import { createSlice } from "@reduxjs/toolkit"

const initialState ={
  task:[]
}
export const taskReducer = createSlice({
  name:"task",  //name of slice
  initialState, 
  reducers:{
    addTask(state,action){
        state.task.push(action.payload)
    }, // individual action creators
    deleteTask(state,action){
     state.task = state.task.filter((curTask,index)=> {
     return index !== action.payload
     })
    }, // individual action creators
    clearTask(state,action){
      state.task = [];
    }
  }
})
export const {addTask,deleteTask,clearTask} = taskReducer.actions
