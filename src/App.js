import logo from './logo.svg';
import './App.scss';
import "./components/Posts/Posts";
import Posts from "./components/Posts/Posts";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap';
import Books from "./components/Books/Books";
import React from "react"; // import the JS
//import 'bootstrap/scss/bootstrap.scss'; // import scss // import scss in App.scss to override

function App() {
  return (
    <div className="App">
        <Container>
            <Row className="align-items-center">
            <Books />
            </Row>
        </Container>
    </div>
  );
}

export default App;
