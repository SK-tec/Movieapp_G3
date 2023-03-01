import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "./Apiflix-logo.png";

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand>
              <img
                src={Logo}
                alt="Logo"
                width="80"
                height="80"
                className="d-inline-block align-top"
              />
              <p className="h2" id="navbar-title">
                Apiflix
              </p>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link className="navLink">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus">
                <Nav.Link className="navLink">About us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="navLink">Contact</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Movies links" id="collasible-nav-dropdown">
                <LinkContainer to="/watchlist">
                  <NavDropdown.Item className="dropdown-navLink">
                    Watchlist
                  </NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/trendingnow">
                  <NavDropdown.Item className="dropdown-navLink">
                    Trending now
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/recommended">
                  <NavDropdown.Item className="dropdown-navLink">
                    Recommended
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav>
              <LinkContainer to="/login">
                <Button variant="outline-secondary">Log in</Button>
              </LinkContainer>
              <LinkContainer to="signup">
                <Button variant="outline-secondary">Sign up</Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;
