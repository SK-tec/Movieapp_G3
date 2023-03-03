import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "./Apiflix-logo.png";
import Textlogo from "./Apiflix-logo-title.png";

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="my-navbar-container">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                alt="Logo"
                width="80"
                height="80"
                className="d-inline-block align-top"
              />
              <img
                src={Textlogo}
                alt="Text-Logo"
                width="150"
                height="150"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id="nav-items">
              <LinkContainer to="/">
                <Nav.Link className="nav-link-item">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus">
                <Nav.Link className="nav-link-item">About us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="nav-link-item">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/login">
                <Button variant="outline-primary" className="mx-4 text-white">
                  Log in
                </Button>
              </LinkContainer>
              <LinkContainer to="signup">
                <Button variant="outline-primary" className="mx-4 text-white">
                  Sign up
                </Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;
