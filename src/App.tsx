import React, {useState} from 'react';
import './App.css';
import {TaskList} from "./components/TaskList";
import {TaskInput} from "./components/TaskInput"
import {Task} from "./components/Types";

const initialState: Task[] = [];

function App() {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div className="App">
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
