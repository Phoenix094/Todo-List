import React from 'react'
import { Form } from "react-bootstrap";

const Addtodo = () => {
    const myStyle = {
        border: 'white 2px',
        borderStyle: 'solid'
      }


  return (
    <>
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
    </>
  )
}

export default Addtodo