import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
const NewMovie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return ( <>
    <Container className='mt-5'>
    <Button variant="primary" className='mb-5' onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
            required
            type="text"
            placeholder="Movie Title"            
          />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Director</Form.Label>
              <Form.Control
            required
            type="text"
            placeholder="Director Name"            
          />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Year</Form.Label>
              <Form.Control
            required
            type="text"
            placeholder="Release Year"            
          />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
            required
            type="text"
            placeholder="Movie Rating"            
          />           
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster</Form.Label>
              <Form.Control
            required
            type="text"
            placeholder="Enter Image URL"            
          />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Synopsis</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    
    </Container>
    </> );
}
 
export default NewMovie;