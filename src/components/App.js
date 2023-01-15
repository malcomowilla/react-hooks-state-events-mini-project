

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [clicked, setClicked] = useState("All")

  const clickFillter = tasks.filter((task)=>{
    if (clicked === "All"){
      return true
    }else{
      return task.text === clicked
    }
  })

  function onTaskFormSubmit(newArr){
    const clickFillter = [...clickFillter, newArr]
    setTasks(clickFillter)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} clicked={clicked} setClicked={setClicked} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={clickFillter}  />
    </div>
  );
}

export default App;