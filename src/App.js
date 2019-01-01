import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home.js"
import ErrorPage from './components/Home/ErrorPage.js'

import AuthenLogin from './components/Authentication/AuthenLogin.js';
import AuthenRegister from './components/Authentication/AuthenRegister.js';
import PasswordForget from './components/Authentication/PasswordForget.js';


import Navigation from './components/Navigation/Navigation';
import User from './components/User/User.js';

import ImageUpload from './components/Account/ImageUpload.js'
import CardUpload from './components/Card/CardUpload.js'
import Card from './components/Card/Card.js'
import Search from './components/Navigation/Search.js'

import { refreshUser } from './components/Authentication/AuthenStatus.js'

import axios from 'axios';
import Switch from 'react-router-dom/Switch';
import ResetPassword from './components/Authentication/ResetPassword';
import LoadingScreen from './components/Home/LoadingScreen';

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
    }, 360000);
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={AuthenLogin} />
            <Route path="/signup" component={AuthenRegister} />
            <Route path={"/u/:username"} component={User} />
            <Route path={"/p/:postId"} component={Card} />
            <Route path="/upload" component={ImageUpload} />
            <Route path="/new" component={CardUpload} />
            <Route path="/search" component={Search} />
            <Route path="/pw-forget" component={PasswordForget} />
            <Route path={"/reset_password/:token"} component={ResetPassword} />

            <Route path="/loading" component={LoadingScreen} />

            <Route component={ErrorPage} />
            <Redirect from="/loading" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
