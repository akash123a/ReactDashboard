import React , {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'  

const NavbarComponent = () => {
    const[darkMode, setDarkMode] = useState(true);
     
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.className = darkMode ? "bg-light text-dark" : "bg-dark text-light";
    }



  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          <button>Dark</button>

          </Nav>
        </Container>
      </Navbar>

      
    </>
  )
}

export default NavbarComponent