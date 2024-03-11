import React, { useState , useEffect } from 'react';
import './App.sass';
import TaskList from './components/taskList/TaskList';
import Form from './components/form/Form';
import Footer from './components/footer/footer';
import { Task } from './types/types';
import img from "./img/background-pgoto.jpg"

const App = () => {

  const title: string = "TO DO";
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("tasks")!) || []);

  const handleInputUpdate = (value: string)=>{
    setInputValue(value);
  };

  const addTask = (task: string) => {
    if (task.trim() !== "") {
      setTasks(prev =>[ ...prev, {id: Date.now(), name: task},]);
      setInputValue("");
    }
  };

  const deleteTask = (taskId :number) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== taskId)
    );
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <img src={img} alt="" />
      <div className='app-container'>
        <h1>{title}</h1>
          <Form handleInputUpdate={(e: React.ChangeEvent<HTMLInputElement>)=>{handleInputUpdate(e.target.value)}} addTask={()=>{addTask(inputValue)}} inputValue={inputValue} />
          <TaskList tasks = {tasks} deleteTask={deleteTask} />
        </div>
      <Footer/>
    </div>
  );
}

export default App;