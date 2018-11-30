import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home.js"
import AuthenLogin from './components/AuthenLogin.js';
import AuthenRegister from './components/AuthenRegister.js'
import User from './components/User.js'

import * as routes from './constants/routes.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={AuthenLogin} />
          <Route path="/signup" component={AuthenRegister} />
          <Route path="/test" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
