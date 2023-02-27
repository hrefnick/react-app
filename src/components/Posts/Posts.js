import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import "./Posts.scss"
import Post from "../Post/Post";
import axios from "axios";

class Posts extends Component {
    postsEndpoint = "//localhost/wp-json/wp/v2/posts";

    // this class component we are extending gives us "state" and "SetState()"
    // state is similar to the data in Vue
    state = {
        posts: [],
        isLoaded: false,
    }

    // this will run when the component is added to the DOM
    // like mounted() in Vue
    componentDidMount() {
        axios
            .get(this.postsEndpoint)
            .then(response => {
                console.log('API Response: ', response);

                // reeplace the array in our state
                // don't do this
                // this.state.posts = response.data

                // we use setState() to let React know we are changing a property
                this.setState({
                    posts: response.data,
                    isLoaded: true,
                })

            })
            .catch(err => {
                console.error('API ERROR: ', err);
            })
        ;
    }
    // .map says call this function for each item in the array

    render() {
        return (
            <div className="Posts">
                {this.state.isLoaded ? '' : <p>Loading...</p>}
                {this.state.posts.map( post =>
                    <Post
                        title={post.title.rendered}
                        body={post.content.rendered}
                        key={post.id}
                    />
                )}

                {/*<Post />*/}
                {/*<Post title={"First Post"} body={"Some information about the brain."} />*/}
            </div>
        );
    }
}

Posts.propTypes = {};

export default Posts;