import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



export default function Header() {
  return (
    <header id="header">
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            OurSiteName
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Movies links" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Watchlist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Trending now
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TOP 10</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Recommended
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#"><Button variant="outline-secondary">Log in</Button></Nav.Link>
            <Nav.Link href="#"><Button variant="outline-secondary">Sign up</Button></Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</header>    

  )
}
