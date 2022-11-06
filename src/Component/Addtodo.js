import { Form } from "react-bootstrap";
import React, { useState } from 'react'



const Addtodo = ({ addTodo}) => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const myStyle = {
    border: 'white 2px',
    borderStyle: 'solid'
  }


  return (
    <>
      <Form>
        <Form.Group className="pt-3 ">
          <h3 className="text-light"> Todo Title</h3>
          <Form.Control className="w-50 " type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
        </Form.Group><br />
        <Form.Group className="pt-3 mb-4">
          <h3 className="text-light" > Todo Descrption</h3>
          <Form.Control className="w-50" type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
        </Form.Group>
        <button type="button" className="btn text-light" style={myStyle} onClick={()=> {addTodo(title,desc); setTitle(''); setDesc('');}}>Add todo</button>
      </Form>
    </>
  )
}

export default Addtodo