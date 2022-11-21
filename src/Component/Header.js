import React from 'react';
import './Css/Header.css';
import { Image, Nav, Navbar } from 'react-bootstrap';


const Header = () => {

  return (
    <><nav>
      <Navbar bg='custom' variant='dark' expand='md'>
        <Navbar.Brand href='#'>
          <Image src='./logo.png' alt="..." width={40} height={40} roundedCircle/>{'                    '}
          Todo List
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
          </Nav>

        </Navbar.Collapse>


      </Navbar>

    </nav>
    </>
  )
}

export default Header;
