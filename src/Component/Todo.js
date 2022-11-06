import React from "react";
import "./Css/section.css";



const Todo = () => {

  return (
    <>
      <TodoItem />
    </>
  );
};

const TodoItem = () => {

  return (

    <>
      <div className='mt-4 border-bottom'>
        <h3 >Goto College</h3>
        <p>going college tommarow at 10.00 am</p>
        <button type='button' className='btn btn-danger mb-2' > Delete</button>
      </div>
    </>
  )
}


export default Todo;
