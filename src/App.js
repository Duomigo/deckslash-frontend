import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home.js"
import AuthenLogin from './components/AuthenLogin.js';
import AuthenRegister from './components/AuthenRegister.js'
import Navigation from './components/Navigation/Navigation';

import User from './components/User.js';

import CreateCard from './components/CreateCard.js'

import * as routes from './constants/routes.js';
import axios from 'axios';
import { throws } from 'assert';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: null,
      }
  }

  async componentDidMount() {
    const res = await axios.get('http://127.0.0.1:5000/testuser');
    console.log("Du lieu nguoi dung: ");
    console.log(res.data);
    await this.setState({ users: res.data })
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Route exact path="/" component={Home} />
          <Route path="/signin" component={AuthenLogin} />
          <Route path="/signup" component={AuthenRegister} />
          <Route path={"/u/:username"} component={User} />
          <Route path="/new" component={CreateCard} />
        </div>
      </Router>
    );
  }
}

export default App;
