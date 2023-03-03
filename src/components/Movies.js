import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "../App.css";
const Movies = () => {
const [movies,setMovies]=useState([]);
useEffect(()=>{
  axios
  .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
  .then((res)=>{
        setMovies(res.data)})
  .catch((e)=>console.log(e))
},[])
    return ( <>
    <Container className='movie-grid mt-5 p-4 y'>
      <Row>
        
        {movies.map((movie)=>(        
        <Card style={{ width: '18rem'}} className="m-2 text-bg-dark" key={movie.id}  >
        <Card.Img variant="top" src={movie.poster}/>
        <Card.Body >
          <Card.Title ><Link to={`/movies/${movie.id}`} className='text-warning'>{movie.title}</Link></Card.Title>
          {/* <Card.Text>
            {movie.synopsis}
          </Card.Text> */}
          
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item className='director'><strong>Director: </strong>{movie.director}</ListGroup.Item>
        <ListGroup.Item className='year'><strong>Release Year: </strong>{movie.year}</ListGroup.Item>
        <ListGroup.Item className='rating'><strong>Rating: </strong>{movie.rating}</ListGroup.Item>
      </ListGroup>
     
      </Card>
      ))}
        
      </Row>
      </Container>
   
    </> );
}
 
export default Movies;