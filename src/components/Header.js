import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand exact to="/">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            OurSiteName
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink exact to="/about-us">
                About us
              </NavLink>
              <NavLink exact to="/contact">
                Contact
              </NavLink>
              <NavDropdown title="Movies links" id="collasible-nav-dropdown">
                <NavDropdown.Item exact to="/watchlist">
                  Watchlist
                </NavDropdown.Item>
                <NavDropdown.Item exact to="/trendingnow">
                  Trending now
                </NavDropdown.Item>
                <NavDropdown.Item exact to="/recommended">
                  Recommended
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavLink href="#">
                <Button variant="outline-secondary">Log in</Button>
              </NavLink>
              <NavLink href="#">
                <Button variant="outline-secondary">Sign up</Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
