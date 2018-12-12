import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import '../styles/User.css';
import axios from 'axios';

import UserScreen from './UserScreen.js';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.username = props.match.params.username;
  }

  async componentWillMount() {
    const AuthToken = localStorage.getItem('jwtToken');
    try {
      const response = await axios.get('http://127.0.0.1:5000/users/' + this.username, {
        headers: {
          "x-access-token": AuthToken
        }
      });
      this.setState({user: response.data});
    } catch (error) {
      console.log(error.response);
    }
  }
  
  render() {
    return (
      (this.state.user) ? (
        <UserScreen userData={this.state.user} />
      ) : (
        <ErrorScreen />
      )
    );
  }
}

const ErrorScreen = () =>
  <div className="App">
    <p1>Error, user does not exist</p1>
  </div>

export default User;
