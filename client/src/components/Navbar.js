import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import sttats from '../assets/sTTats.svg'

// Pages import


function NavBar(){
    return(
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
        <img
          alt="sTTats logo"
          src={sttats}
          width="100"
          height="30"
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="About" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">How-To</Nav.Link>
            <Nav.Link href="#pricing">Get Started</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="https://github.com/EIIis/osrs-site">Source Code</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;