import React, { useState } from 'react'
import "./App.css"
import Task from './Task.js';

const Practice = () => {

    const [todoList, setTodoList]=useState([]);
    const [newTask, setnewTask]= useState("");
  
    
    const handleChange=(event)=>{
      setnewTask(event.target.value)
    }


    const addTask=()=>{
      const task={
       id: todoList.length ===0 ? 1: todoList[todoList.length-1]+1,
        taskName: newTask,
        completed: false,
      }
      setTodoList([...todoList, task])
    }

    const completeTask=(id)=>(
      setTodoList(todoList.map((task)=>{
        if (task.id=id){
          return{...task, completed: true}
        } else {
          return task;
        }
      }))
    )


    const deleteTask=(id)=>{
      setTodoList(todoList.filter((task)=>task.id !==id));
    }


  return (
    <div className='app'>
      <div className='addTask'>
        <p id='ptodo'>TODO List</p>
        <input placeholder='write your todo list here ...' onChange={handleChange}></input>
        <button id='badd' onClick={addTask}>Add task</button>




        <div className='list'>

        <p id='listp'>list of works</p>
          {todoList.map((task)=>{
            return(
              <Task taskName={task.taskName}
                    id={task.id}
                    completed={task.completed}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    
                    ></Task>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Practice


