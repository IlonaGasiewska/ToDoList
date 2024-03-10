import React, { useState } from 'react';
import './App.sass';
import TaskList from './components/taskList/TaskList';
import Form from './components/form/Form';
import Footer from './components/footer/footer';
import { Task } from './types/types';
import img from "./img/background-pgoto.jpg"

const App = () => {

  const title: string = "TO DO";
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleInputUpdate = (event : any)=>{
    setInputValue(event.target.value);
  }

  const addTask = () => {
    const taskId: number = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
    setTasks(prev =>[{id: taskId, name: inputValue}, ...prev]);
  }

  const deleteItem = (id : number) => {
    setTasks(prev => prev.filter(task => task.id))
  }

  return (
    <div className="App">
      <img src={img} alt="" />
      <div className='app-container'>
        <h1>{title}</h1>
          <Form handleInputUpdate={handleInputUpdate} addTask={addTask}/>
          <TaskList tasks = {tasks} deleteItem={deleteItem} />
        </div>
      <Footer/>
    </div>
  );
}

export default App;
