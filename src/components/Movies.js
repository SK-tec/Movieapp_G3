import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
const Movies = () => {
    return ( <>
<Container className='mt-5 '>
<CardGroup >
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmk3Vi727WknMpSA3d0QawqyJD0XrQdBQT0BzjzMnPXiRBQQXz" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating:</small>
        </Card.Footer>
      </Card>
    
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqgWkU4lJ49fP-biZlp_kNAWbfINefWmuBHNrMpTP_KCBMqvyw" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating:</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjYlk1fycL4rS4fsfxbWMVW9GgUds95lxG_CrhypJZvBJx-6i" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className='h-25'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating:</small>
        </Card.Footer>
      </Card>
    </CardGroup>
</Container>
    
    
    </> );
}
 
export default Movies;