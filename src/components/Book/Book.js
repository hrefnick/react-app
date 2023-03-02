import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';
import '../Featured/Featured';
import Featured from "../Featured/Featured";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';

const Book = (props) => (
    <Col sm={3}>
      <Card className="Book" style={{ width: '50rem', color: "black", padding: 20, margin: 50 }}>
          <Featured
              image={props.image}/>
          <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                 <p dangerouslySetInnerHTML={{__html: props.description}} />
              </Card.Text>
          </Card.Body>
      </Card>
    </Col>




);

Book.propTypes = {
    "title": PropTypes.string,
    "image": PropTypes.string,
    "description": PropTypes.string,
};

Book.defaultProps = {
    "title": "Book Title",
    "image": "Image",
    "description": "A short excerpt.",
};

export default Book;
