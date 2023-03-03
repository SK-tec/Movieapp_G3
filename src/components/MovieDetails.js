import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col, Button } from "react-bootstrap";
import UpdateMovie from "./UpdateMovie";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="m-2">
              <Card.Img variant="top" src={movie?.poster} thumbnail />
            </Card>
          </Col>
          <Col className="mt-5">
            <Card style={{ width: "40rem" }} className="m-2">
              <Card.Body>
                <Card.Title>
                  <Link className="text-warning">{movie?.title}</Link>
                </Card.Title>

                <Card.Text>{movie?.synopsis}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-bg-warning">
                  <strong>Director: </strong>
                  {movie?.director}&nbsp; &nbsp;|
                  <strong> &nbsp; &nbsp; Release Year: </strong>
                  {movie?.year} &nbsp; &nbsp;|
                  <strong>&nbsp; &nbsp; Rating: </strong>
                  {movie?.rating}
                </ListGroup.Item>
              </ListGroup>
            </Card>
      
            {/* <Button variant="secondary" size="lg" className="m-2" onClick={<UpdateMovie/>}>
          Update
        </Button> */}
        <UpdateMovie/>
        <Button variant="danger" size="lg" className="m-2"onClick={handleDelete} >
          Delete
        </Button>            
       </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
