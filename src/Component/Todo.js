import React from "react";
import "./Css/section.css";
import { Container, Form } from "react-bootstrap";
import TodoItem from "./TodoItem";

const Todo = () => {

  const myStyle = {
    border: 'white 2px',
    borderStyle: 'solid'
  }


  return (
    <>
      <div className="section text-light">
        <Container>
          <Form>
            <Form.Group className="pt-3 ">
              <h3 className="text-light"> Todo Title</h3>
              <Form.Control className="w-50 " type="text" />
            </Form.Group><br />
            <Form.Group className="pt-3 mb-4">
              <h3 className="text-light"> Todo Descrption</h3>
              <Form.Control className="w-50" type="text" />
            </Form.Group>
            <button type="button" className="btn text-light" style={myStyle}>Add todo</button>
          </Form>



          <TodoItem/>
        </Container>
      </div>
    </>
  );
};

export default Todo;
