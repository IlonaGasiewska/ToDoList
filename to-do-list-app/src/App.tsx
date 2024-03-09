import React from 'react';
import './App.sass';

function App() {

  const title: string = "TO DO LIST";
  const tasks: string[] = ["task1", "task2"];

  return (
    <div className="App">
      <h1>{title}</h1>
      <input type="text" />
      <ul>
        {tasks.map(task=> <li>task</li>)}
      </ul>
      <footer></footer>
    </div>
  );
}

export default App;
