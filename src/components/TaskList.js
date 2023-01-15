import React, {useState} from "react";
import Task from "./Task";


function TaskList({tasks}) {
  
  const [remove, setRemove]= useState(tasks)
  

  function onClickHandler(text){
    const newTaskArray = remove.filter((removed)=> removed.text !== text);
  
    setRemove(newTaskArray)
  }
  return (
    <div className="tasks">
      <ul className="Tasks" >
        {remove.map((removed, index)=>{
          return <Task tasks = {removed} text={removed.text} category={removed.category} key={index} index={index} onClickHandler={onClickHandler} />
        })}
      </ul>
    </div>
  );
}

export default TaskList;