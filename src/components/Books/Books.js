import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Books.scss';
import axios from "axios";
import Book from "../Book/Book";


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
                <div className="Books">
                    {this.state.isLoaded ? '' : <p>Loading...</p>}
                    {this.state.books.map(book =>
                        <Book
                            title={book.title.rendered}
                            description={book.content.rendered}
                            image={book._links['wp:featuredmedia'][0].href}
                            key={book.id}
                        />
                    )}
                </div>
            );
        }
    }

Books.propTypes = {};

export default Books;