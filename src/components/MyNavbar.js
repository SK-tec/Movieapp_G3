import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
const MyNavbar = () => {
  return (
    <>
      <div id="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand href="#home">
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
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/aboutus">
                  <Nav.Link>About us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/movieslinks">
                  <NavDropdown
                    title="Movies links"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Watchlist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Trending now
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      TOP 10
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Recommended
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              </Nav>
              <Nav>
                <LinkContainer to='/login'>
                  <Nav.Link href="#">
                    <Button variant="outline-secondary">Log in</Button>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signup'>
                  <Nav.Link href="#">
                    <Button variant="outline-secondary">Sign up</Button>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MyNavbar;
