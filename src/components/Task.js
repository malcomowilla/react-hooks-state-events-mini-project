import React from "react";


function Task({ category, index, text, onClickHandler }) {
  
  
  return (
    <li className="task" key={index}  >
      <span className="label">{category}</span>
      <span className="text">{text}</span>
      <button className="delete" onClick={()=>onClickHandler(text)} >X</button>
    </li>
  );
}

export default Task;