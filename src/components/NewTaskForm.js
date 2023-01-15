import React from "react";
import { useState } from "react"

function NewTaskForm({categories, onTaskFormSubmit}) {
  
  const [formInput, setFormInput] = useState({
    text:"",
    category:""
  })

  function changeHandler(event){
    const key = event.target.id
    setFormInput({...formInput, [key]:event.target.value})
  }
  const selectOptions = [...categories]
  selectOptions.shift()
  
  // console.log(categories)
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={changeHandler}/>
      </label>
      <label>
        Category
        <select name="category" value={formInput.category} onChange={changeHandler} id="category" >
          {selectOptions.map((category, index)=>{
            return <option key={index}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;