import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const Movies = () => {
const [movies,setMovies]=useState([]);
useEffect(()=>{
  axios
  .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
  .then((res)=>{
    console.log(res.data.url)
    setMovies(res.data)})
  .catch((e)=>console.log(e))
},[])
    return ( <>
    <Container className='mt-5 p-4'>
      <Row>
        
        {movies.map((movie)=>(
        
        <Card style={{ width: '25rem'}} className="m-2" >
        <Card.Img variant="top" src={movie.poster}/>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.synopsis}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating:{movie.rating}</small>
        </Card.Footer>
      </Card>
      ))}
        
      </Row>
      </Container>
   
    </> );
}
 
export default Movies;