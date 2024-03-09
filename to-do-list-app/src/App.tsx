import React from 'react';
import './App.sass';
import TaskList from './components/taskList/TaskList';
import Footer from './components/footer/Footer';

function App() {

  const title: string = "TO DO";
  const tasks: string[] = ["task1", "task2"];

  return (
    <div className="App">
      <h1>{title}</h1>
      <input type="text" />
      <TaskList tasks = {tasks}/>
      <Footer/>
    </div>
  );
}

export default App;
