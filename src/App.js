import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home.js"
import AuthenLogin from './components/AuthenLogin.js';
import AuthenRegister from './components/AuthenRegister.js'
import Navigation from './components/Navigation/Navigation';

import User from './components/User.js';
import UserScreen from './components/UserScreen.js'

import CreateCard from './components/CreateCard.js'
import ImageUpload from './components/ImageUpload.js'

import CardUpload from './components/CardUpload.js'

import { refreshUser } from './components/AuthenStatus.js'

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: null,
        currentUser:  null,
      }
  }

  async componentDidMount() {

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    const header = {
        "Access-Control-Allow-Origin": 'content-type',
        "Authorization": bearer
    }

    const usersData = await axios.get('http://127.0.0.1:5000/testuser');
    await this.setState({ users: usersData.data })

    const profileData = await axios.get('http://127.0.0.1:5000/profile', { headers: header});
    await this.setState({ currentUser: profileData.data });


    this.interval = setInterval(() => {
      refreshUser();
    }, 60000);
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
          <Route path="/upload" component={ImageUpload} />

          <Route path="/yolo" component={CardUpload} />

        </div>
      </Router>
    );
  }
}

export default App;
