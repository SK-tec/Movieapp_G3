import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Textlogo from "./Apiflix-logo-title.png";

export default function Hero2() {
  return (
    <div id="gigihero">
      <Container fluid>
        &nbsp;
        <Container id="gigihero2">
          <div className="hero-main-container">
            <Row className="py-5">
              <div className="text-logo-container">
                <img
                  src={Textlogo}
                  alt="Text-Logo"
                  width="300"
                  className="d-inline-block align-top"
                />
              </div>
              <div className="d-flex justify-content-center">
                <InputGroup className="mb-3">
                  <Form.Control
                    className="movie-search-bar"
                    placeholder="Movie search"
                    aria-label="Movie search"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    variant="info"
                    className="movie-search-bttn"
                    id="button-addon2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-search"
                      viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </Button>
                </InputGroup>
              </div>

              <h2 className="mb-5">
                Stream your favorite movies at the comfort of your home
              </h2>
              <div class="mx-auto col-10 col-md-8 col-lg-6">
                <Button variant="outline-info" className="gigibtn mb-5">
                  Watch now
                </Button>{" "}
              </div>
            </Row>
          </div>
        </Container>
        &nbsp;
      </Container>
    </div>
  );
}
