import React from "react";


function CategoryFilter({categories, clicked, setClicked}) {
   return (
    <div className="categories">
      <h5>Category filters</h5>
      <div>
        {categories.map((category, index)=>(
         <button className={clicked === category? "selected": ""} key={index} onClick={()=>setClicked(category)}>{category}</button>
        ))}
      </div>
    </div>
  );
}


export default CategoryFilter;






//{/* render <button> elements for each category here */}