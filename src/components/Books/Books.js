import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Books.scss';
import axios from "axios";
import Book from "../Book/Book";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


    class Books extends Component {
        booksEndpoint = "//nryan4.bitlampsites.com/wpd/homework/wp-json/wp/v2/book\n";

        // this class component we are extending gives us "state" and "SetState()"
        // state is similar to the data in Vue
        state = {
            books: [],
            isLoaded: false,
        }

        componentDidMount() {
            axios
                .get(this.booksEndpoint)
                .then(response => {
                    console.log('API Response: ', response);

                    this.setState({
                        books: response.data,
                        isLoaded: true,
                    })

                })
                .catch(err => {
                    console.error('API ERROR: ', err);
                })
            ;
        }

        render() {
            return (
                <Row className="Books">
                    {this.state.isLoaded ? '' : <p>Loading...</p>}
                    {this.state.books.map(book =>
                        <Col sm={4}>
                        <Book
                            title={book.title.rendered}
                            description={book.content.rendered}
                            image={book._links['wp:featuredmedia'][0].href}
                            key={book.id}
                        />
                        </Col>
                    )}
                </Row>
            );
        }
    }

Books.propTypes = {};

export default Books;