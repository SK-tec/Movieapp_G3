import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              OurSiteName
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link className="navLink text-white">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer  to="/aboutus">
                <Nav.Link className="navLink text-white">About us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="navLink text-white">Contact</Nav.Link>
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
                <Button variant="outline-primary" className="mx-4 text-white">Log in</Button>
              </LinkContainer>
              <LinkContainer to="signup">
                <Button variant="outline-primary" className="mx-4 text-white">Sign up</Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;
