import React, { useState , useEffect } from 'react';

import { TaskList } from './components/TaskList/TaskList';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/footer';
import { TaskTypes } from './types/types';

import './App.scss';

const App = () => {

  const title: string = "TO DO";
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<TaskTypes[]>(JSON.parse(localStorage.getItem("tasks")!) || []);

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
      <div className='photo' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/background-photo.jpg'})` }}></div>
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