import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Container fluid className="movie-grid mt-5  p-4 y">
        <Row className="justify-content-center">
          {movies.map((movie) => (
            <Card
              style={{ width: "18rem", backgroundColor: "transparent" }}
              className="m-2 border-0 "
              key={movie.id}>
              <Card.Img variant="top" src={movie.poster} />
              <Card.Body>
                <Card.Title>
                  <Link
                    to={`/movies/${movie.id}`}
                    style={{ textDecoration: "none" }}
                    className="text-white"
                    id="movie-title-link">
                    {movie.title}
                  </Link>
                </Card.Title>
                {/* <Card.Text>
            {movie.synopsis}
          </Card.Text> */}
              </Card.Body>
              {/* <ListGroup className="list-group-flush">
        <ListGroup.Item className='text-bg-warning'><strong>Director: </strong>{movie.director}</ListGroup.Item>
        <ListGroup.Item className='text-bg-danger'><strong>Release Year: </strong>{movie.year}</ListGroup.Item>
        <ListGroup.Item className='text-bg-success'><strong>Rating: </strong>{movie.rating}</ListGroup.Item>
      </ListGroup> */}
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Movies;
