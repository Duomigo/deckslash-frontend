import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home.js"
import AuthenLogin from './components/AuthenLogin.js';
import AuthenRegister from './components/AuthenRegister.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={AuthenLogin} />
          <Route exact path="/signup" component={AuthenRegister} />
        </div>
      </Router>
    );
  }
}

export default App;
