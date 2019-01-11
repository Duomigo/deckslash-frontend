import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';
import axios from 'axios';

import UserScreen from './UserScreen.js';
import ProfileScreen from './ProfileScreen.js'
import ErrorPage from '../Home/ErrorPage.js'
import LoadingScreen from '../Home/LoadingScreen.js'

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null,
      userOwner: false
    }

    this.username = props.match.params.username;
  }

  async componentWillMount() {

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    var header = {
        "Access-Control-Allow-Origin": 'content-type',
        "Authorization": bearer
    }

    try {
      const response = await axios.get('https://40.83.75.170:5000/users/' + this.username, { headers: header });
      this.setState({ user: response.data });
      this.setState({ loading: false })
    } catch (error) {

      this.setState({ loading: false })
    }

    try {
      const accountResponse = await axios.get('https://40.83.75.170:5000/profile', { headers: header });
      const accountUsername = accountResponse.data.user.username;

      if (accountUsername === this.username) {
        this.setState({ userOwner: true })
      }

    } catch (error) {

    }
  }

  
  render() {

    return (

      (this.state.loading) ? (
        <LoadingScreen />
      ) : (
        (this.state.user) ? (
          (this.state.userOwner) ? (
            <ProfileScreen userData={this.state.user} />
          ) : (
            <UserScreen userData={this.state.user} />
          )
        ) : (
          <ErrorPage />
        )
      )
    );
  }
}

export default User;
