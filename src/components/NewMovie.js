import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewMovie = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    director: "",
    year: 0,
    rating: 0,
    poster: "",
    synopsis: "",
  });
  const resetButton = (e) => {
    setForm({
      title: "",
      director: "",
      year: 0,
      rating: 0,
      poster: "",
      synopsis: "",
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`);
    console.log(form);
    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`, form)
      .then((res) => {
        navigate("/");
        resetButton();
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Container className="mt-5">
        <Button variant="primary" className="mb-5" onClick={handleShow}>
          Add New Movie
        </Button>

        <Modal show={show} onHide={handleClose} className="my-modal">
          <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleInput}
                  placeholder="Movie Title"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Director</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="director"
                  value={form.director}
                  onChange={handleInput}
                  placeholder="Director Name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Year</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="year"
                  value={form.year}
                  onChange={handleInput}
                  placeholder="Release Year"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="rating"
                  value={form.rating}
                  onChange={handleInput}
                  placeholder="Movie Rating"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Poster</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="poster"
                  value={form.poster}
                  onChange={handleInput}
                  placeholder="Enter Image URL"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Synopsis</Form.Label>
                <Form.Control
                  as="textarea"
                  name="synopsis"
                  value={form.synopsis}
                  onChange={handleInput}
                  rows={3}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default NewMovie;
