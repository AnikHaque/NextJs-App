import React from 'react'
import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

const Navigation = () => {
    return ( 
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href='/'>
           Home
            </Nav.Link>
            <Nav.Link as={Link} href='/about'>
           About
            </Nav.Link>
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
     );
}
 
export default Navigation;