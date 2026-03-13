import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/lion.png"
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const NavbarComponent = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      bg={theme === "light" ? "light" : "dark"}
      data-bs-theme={theme}
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          <img src="/lion.png" alt="logo" className="navbar-logo" />
        </Navbar.Brand>

        {/* Hamburger Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>

          <Button onClick={toggleTheme}>
            {theme === "light" ? "Dark 🌙" : "Light ☀️"}
          </Button>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavbarComponent;