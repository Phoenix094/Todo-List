import React from 'react';
import './Css/Header.css';
import {Nav,Navbar} from 'react-bootstrap';


const Header = () => {
  return (
    <>
      <Navbar bg='custom' variant='dark' expand='md'>
        <Navbar.Brand href='#'>
          <img src='./logo.png' alt="..." width={40} height={40} />{'                    '}
          Todo List
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav>
          <Nav.Link href='#'>Home</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
        </Nav>

        </Navbar.Collapse>
        
      </Navbar>
    </>
  )
}

export default Header;
