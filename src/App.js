import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer'
import Addtodo from './Component/Addtodo';
import Todo from './Component/Todo'
import { Container } from 'react-bootstrap';
import React, { useState } from 'react'


function App() {

  
  const onDelete = (todo) =>{
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }


  const addTodo = (title,desc) => {
    if(!title && !desc){
      alert('Title and desc cant be empty');
    }
    else{

      let sr;
      if(todos.length == 0){
        sr = 0;
      }
      else{
        sr = todos[todos.length - 1].sr + 1;
      }
      const myTodo ={
        sr:sr,
        title:title,
        desc:desc,
      }
  
      setTodos([...todos,myTodo]);
    }

  }
  const [todos,setTodos] = useState([]);


  return (
    <>
      <Header />
      <div className="section text-light">
        <Container>
          <Addtodo addTodo={addTodo} />
          <Todo todos={todos} onDelete={onDelete}/>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
