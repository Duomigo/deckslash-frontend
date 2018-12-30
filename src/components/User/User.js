import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';
import axios from 'axios';

import UserScreen from './UserScreen.js';
import ProfileScreen from './ProfileScreen.js'

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
      const response = await axios.get('http://127.0.0.1:5000/users/' + this.username, { headers: header });
      this.setState({ user: response.data });
      this.setState({ loading: false })
    } catch (error) {
      console.log(error.response);
      this.setState({ loading: false })
    }

    try {
      const accountResponse = await axios.get('http://127.0.0.1:5000/profile', { headers: header });
      const accountUsername = accountResponse.data.user.username;

      if (accountUsername === this.username) {
        this.setState({ userOwner: true })
      }

    } catch (error) {
      console.log(error.response);
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
          <ErrorScreen />
        )
      )
    );
  }
}

const ErrorScreen = () =>
  <div className="App">
    <p1>Error, user does not exist</p1>
  </div>

const LoadingScreen = () =>
  <div className="App">
    <p1>Loading...</p1>
  </div>

export default User;
