import React from "react";
import "./Css/section.css";
import { Button, Container, Form } from "react-bootstrap";

const Todo = () => {
  return (
    <>
      <div className="section">
        <Container>
          <Form>
            <Form.Group className="pt-3 ">
              <h3 className="text-light"> Todo Title</h3>
              <Form.Control className="w-50 " type="text" />
            </Form.Group><br/>
            <Form.Group className="pt-3 mb-4">
              <h3 className="text-light"> Todo Descrption</h3>
              <Form.Control className="w-50" type="text" />
            </Form.Group>
            <Button variant="primary" className="myStyle" >Add Todo</Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Todo;
