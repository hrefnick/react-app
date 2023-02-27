import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';
import '../Featured/Featured';
import Featured from "../Featured/Featured";

const Book = (props) => (
  <div className="Book">
      <h2>{props.title}</h2>
      <Featured
      image={props.image}/>
      <p dangerouslySetInnerHTML={{__html: props.description}} />
  </div>
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
