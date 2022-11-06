import React from "react";
import "./Css/section.css";



const Todo = ({ todos, onDelete }) => {

  return (
    <>
      {
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sr} onDelete={onDelete} />
        })
      }
    </>
  );
};

const TodoItem = ({ todo, onDelete }) => {

  return (

    <>
      <div className='mt-4 border-bottom'>
        <h3 >{todo.title}</h3>
        <p>{todo.desc}</p>
        <button type='button' className='btn btn-danger mb-2' onClick={()=>onDelete(todo)}> Delete</button>
      </div>
    </>
  )
}


export default Todo;
