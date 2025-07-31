import React, { useState } from "react";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, fetchTask } from "../oldstore";

const Todo = () => {
  const [task,setTask] = useState("")
  const dispatch = useDispatch()
  const tasks = useSelector((state)=> state.task);
  // console.log("React states",state.task)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task))
    return setTask("")
  }
  const deleteTasks = (id) => {
    dispatch(deleteTask(id))
  }
  const handleFetchTask = ( )=>{
    dispatch(fetchTask())
  }
  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <form className="input-section" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your task" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button>Add Task</button>
      </form>

      <ul className="task-list">
      {tasks.map((curTask,index)=>{
       return <li key={index}>
        <p>{index} {curTask}</p>
          <button className="delete-btn" onClick={()=> deleteTasks(index)}>Delete</button>

       </li>
      })}
        {/* <li>
          Sample Task
          <button className="delete-btn">Delete</button>
        </li> */}
      </ul>
      <button onClick={handleFetchTask}>Fetch Task</button>
    </div>
  );
};

export default Todo;
