import React, { useState } from 'react'
import "./Todo.css";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, clearTask, deleteTask } from '../features/tasks/taskSlice';

const TodoNewVersionRedux = () => {
  const [userTask,setUserTask] = useState("");
  const tasks = useSelector((state)=> state.taskReducer.task)

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(userTask));
    setUserTask("")
  }
  const handleDeleteTask=(id) => {
    dispatch(deleteTask(id))
  }
  const handleClearTask = () => {
    dispatch(clearTask())
  }
  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <form className="input-section" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter your task" value={userTask} onChange={(e) => setUserTask(e.target.value)} />
        <button>Add Task</button>
      </form>

      <ul className="task-list">
        {tasks?.map((curTask,index)=>{
       return <li key={index}>
        <p>{index} {curTask}</p>
          <button className="delete-btn" onClick={()=> handleDeleteTask(index)} >Delete</button>

       </li>
      })}
      </ul>
      <button onClick={handleClearTask}>Clear</button>
    </div>
  )
}

export default TodoNewVersionRedux