import React from 'react'
import './Css/footer.css'
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer className='bg-custom text-light w-100 h100'>

        <Container>
          <p className='mb-2'> &copy;Todo list </p>
          <p>Created by Somesh Chavhan</p>
        </Container>
      </footer>
    </>
  )
}

export default Footer