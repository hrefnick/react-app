import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';
import '../Featured/Featured';
import Featured from "../Featured/Featured";
import Card from "react-bootstrap/Card";

const Book = (props) => (
      <Card className="Book" style={{ color: "black", padding: 20, "margin-bottom": 50 }}>
          <Featured
              image={props.image}/>
          <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                 <p dangerouslySetInnerHTML={{__html: props.description}} />
              </Card.Text>
          </Card.Body>
      </Card>




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
