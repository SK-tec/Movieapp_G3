import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col, Button } from "react-bootstrap";
import UpdateMovie from "./UpdateMovie";
import Form from "react-bootstrap/Form";

const MovieDetails = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    id: "",
    comments: "",
  });
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [comment, setComment] = useState([]);
  const [isEdit, setEdit] = useState(false);

  const handleEdit = (comments) => {
    console.log(`handleEdit${comments}`);
    return (
      <>
        <Form.Control
          type="text"
          value={comments}
          name="comments"
          onChange={(e) => handleInput(e.target.value)}
        />
      </>
    );
  };

  const resetButton = (e) => {
    setForm({
      comments: "",
    });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value, id: id });
  };
  const fetchMovies = (id) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  };
  const fetchComments = (id) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/comments/${id}`)
      .then((res) => {
        setComment(res.data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchMovies(id);
  }, [id]);
  useEffect(() => {
    fetchComments(id);
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  const handleAddComment = (e) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/comments`, form)
      .then((res) => {
        resetButton();
        fetchComments(id);
      })
      .catch((e) => console.log(e));
  };
  const handleSaveComment = (comment_id, comments) => {
    setEdit(!isEdit);
  };
  const hendleUpdateComment = (comment_id, comments) => {
    setEdit(!isEdit);
    //handleEdit(comments);

    console.log(
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/comments/${comment_id}`
    );
    console.log(form);
    // axios
    // .post(
    //   `${process.env.REACT_APP_SERVER_BASE_URL}/api/comments/${comment_id}`,form
    // )
    // .then((res) => {
    //   fetchComments(id);
    // });
  };

  const handleDeleteComment = (comment_id) => {
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/comments/${comment_id}`
      )
      .then((res) => {
        fetchComments(id);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container className="  mt-5">
        <Row className="mb-5">
          <Col>
            <img
              src={movie?.poster}
              style={{ width: "40rem", height: "40rem" }}
              alt=""
            />
          </Col>
          <Col>
            <Container className="moviedetails mt-5 text-white">
              <h2 className="text-white " style={{textDecoration:'underline'}} > {movie?.title}</h2>
              <h5 className="mt-5 mb-5">{movie?.synopsis}</h5>
            </Container>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <strong>Director: </strong>
                {movie?.director}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Release Year: </strong>
                {movie?.year}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Rating: </strong>
                {movie?.rating}
              </ListGroup.Item>
            </ListGroup>
            <Row>
              <Col>
                <UpdateMovie />
              </Col>
              <Col>
                <Container className="mt-5">
                  <Button
                    variant="danger"
                    className="m-2"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  <h4 className="text-white bg-danger">Add a Comment</h4>{" "}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="comments"
                  value={form.comments}
                  onChange={handleInput}
                  rows={2}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            {" "}
            <br />
            <Button
              variant="danger"
              size="sm"
              className="mt-5"
              onClick={handleAddComment}
            >
              <i className="bi bi-plus"></i>
            </Button>
          </Col>
        </Row>
        <Row>
          <ol>
            {comment.map((item) => (
              <li key={item.comment_id} className="text-white">
                <Row>
                  <Col md={10} className=" m-3 text-start">
                    <p style={{ fontSize: "1.2vw" }}>{item.comments}</p>
                    {/* {isEdit?handleEdit(item.comments):<p style={{ fontSize: "1.2vw" }}>{item.comments}</p>} */}
                  </Col>

                  <Col>
                    <Button
                      variant="danger"
                      size="sm"
                      className="m-2"
                      onClick={(e) => {
                        handleDeleteComment(item.comment_id);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ol>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
