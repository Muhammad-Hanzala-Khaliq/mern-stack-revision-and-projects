import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
const ADD_TASK= "task/add";
const DELETE_TASK ="task/delete";
const Fetch_Task = "task/fetch"

const initialState = {
  task:[],
}

const taskReducer = (state=initialState,action)=>{
   switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task:[...state.task,action.payload]
      };

      case DELETE_TASK:
        const updatedTask = state.task.filter((curTask,index)=> {
          return index !== action.payload
        });
        return {
          ...state,
          task:updatedTask
        }
      
      case Fetch_Task:
        return {
          ...state,
          task:[...state.task,...action.payload]
        }
    default:
      return state;
   }
}



export const store = createStore(taskReducer,applyMiddleware(thunk));
// console.log(store);

// console.log("initial state",store.getState());
export const addTask = (data) => {
  return {type:ADD_TASK,payload:data}
}
export const deleteTask = (id) => {
  return {type:DELETE_TASK,payload:id}
}
// store.dispatch(addTask());

export const fetchTask = ()=> {
  return async (dispatch) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
      const task = await res.json();
      dispatch({type:Fetch_Task,payload:task.map((curTask)=> curTask.title)})
    } catch (error) {
      console.log(error)
    }
  }
}
// console.log("UPDATED STATED",store.getState())