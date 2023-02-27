import logo from './logo.svg';
import './App.scss';
import "./components/Posts/Posts";
import Posts from "./components/Posts/Posts";
import 'bootstrap';
import Books from "./components/Books/Books"; // import the JS
//import 'bootstrap/scss/bootstrap.scss'; // import scss // import scss in App.scss to override

function App() {
  return (
    <div className="App">
        <div className="container">
            <button className="btn btn-primary">Test Button</button>
            <Posts />
            <Books />
        </div>
    </div>
  );
}

export default App;
