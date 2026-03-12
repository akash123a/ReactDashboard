import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import FetchProducts from "../common/Product/FetchProducts";

const NavbarComponent = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar bg={theme === "light" ? "light" : "dark"} data-bs-theme={theme}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>

          <Button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
          </Button>

        </Container>
      </Navbar>
     
    </>
  );
};

export default NavbarComponent;