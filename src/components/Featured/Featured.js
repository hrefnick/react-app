import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Featured.scss';
import '../Book/Book';
import axios from "axios";
import Card from "react-bootstrap/Card";



class Featured extends Component {
    state = {
        featured: {},
        isLoaded: false,
    }
    componentDidMount() {
        console.log(this.props.image);
        axios
            .get(this.props.image)
            .then(response => {
                console.log('API Response: ', response);

                this.setState({
                    featured: response.data,
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
            <div className="Featured">
                {this.state.isLoaded ? '' : <p>Loading...</p>}
                <Card.Img style={{width: '10rem', height: '15rem'}} variant="top" src={this.state.featured?.media_details?.sizes?.full?.source_url} />
            </div>
        );
    }
}
Featured.propTypes = {};

export default Featured;
