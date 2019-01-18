import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';
import { BrowserRouter as Router, Route, Redirect, StaticRouter } from "react-router-dom";
import Home from "./components/Home/Home.js"
import ErrorPage from './components/Home/ErrorPage.js'

import AuthenLogin from './components/Authentication/AuthenLogin.js';
import AuthenRegister from './components/Authentication/AuthenRegister.js';
import PasswordForget from './components/Authentication/PasswordForget.js';

import isAuth from './components/Authentication/AuthenStatus.js'

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

import Profile from './components/User/Profile'
import Emoji from './components/Home/Emoji'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: null,
        currentUser: undefined,
        userLoading: false
      }
  }

  async componentDidMount() {

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    const header = {
        "Access-Control-Allow-Origin": 'content-type',
        "Authorization": bearer
    }

    const usersData = await axios.get('https://mojitobooks.pythonanywhere.com/testuser');
    await this.setState({ users: usersData.data })

    try {
      const profileData = await axios.get('https://mojitobooks.pythonanywhere.com/profile', { headers: header});
      await this.setState({ currentUser: profileData.data.user.username });
    } catch (error) {
      console.log(error.response)
      this.setState({ userLoading: true })
    }

    this.interval = setInterval(() => {
      refreshUser();
    }, 10000);
  }

  render() {

    const { currentUser, userLoading } = this.state

    return (
      <Router>
        <div>
          <Navigation />

          <Switch>

            <Route exact path="/" component={Home} />
            <Route path={"/u/:username"} component={User} />
            <Route path={"/p/:postId"} component={Card} />
            <Route path="/search" component={Search} />
            <Route path="/emoji" component={Emoji} />

            <HomeRoute path="/signin" component={AuthenLogin} />
            <HomeRoute path="/signup" component={AuthenRegister} />
            <HomeRoute path="/pw-forget" component={PasswordForget} />
            <HomeRoute path={"/reset_password/:token"} component={ResetPassword} />

            <ProtectedRoute path="/new" component={CardUpload} />

            {/* <Route
                path="/new"
                render={() => (
                isAuth() ?
                    <CardUpload /> :
                    <Redirect to="/signin" />
                )} 
            /> */}

            {(currentUser || userLoading) &&
              <Route
                path='/profile'
                render={(props) => <Profile {...props} currentUser={currentUser} userLoading={userLoading}/>}
              />
            }

            <Route component={ErrorPage} />

          </Switch>
        </div>
      </Router>
    );
  }
}

class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          isAuth() ?
            <Component {...props} /> :
            <Redirect to='/signin' />
        )} 
      />
    )
  }
}

class HomeRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          isAuth() ?
            <Redirect to='/' /> :
            <Component {...props} />
        )} 
      />
    )
  }
}

export default App;
