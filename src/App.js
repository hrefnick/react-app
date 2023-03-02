import logo from './logo.svg';
import './App.scss';
import "./components/Posts/Posts";
import Posts from "./components/Posts/Posts";
import Container from 'react-bootstrap/Container';
import 'bootstrap';
import Books from "./components/Books/Books";
import React from "react"; // import the JS
//import 'bootstrap/scss/bootstrap.scss'; // import scss // import scss in App.scss to override

function App() {
  return (
    <div className="App">
        <Container>
            <Books />
        </Container>
    </div>
  );
}

export default App;
