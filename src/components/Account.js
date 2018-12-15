import React, { Component } from 'react';
import { 
  Link,
  withRouter 
} from 'react-router-dom';

import { SignUpLink } from './AuthenRegister';
// import { PasswordForgetLink } from '../PasswordForget';

import * as routes from '../constants/routes';
import isAuth from './AuthenStatus';

import axios from 'axios';

import '../styles/AuthenLogin.css'
import '../styles/Home.css'
import '../styles/User.css'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  name: '',
  email: '',
  bio:'',
  error: null,
};

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.profileData.username,
      name: props.profileData.name,
      email: props.profileData.email,
      bio: props.profileData.bio,
      error: null,
    };
  }

  onSubmit = (event) => {
    const {
      username,
      name,
      email,
      bio,
      profile_image
    } = this.state;

    const {
      history,
    } = this.props;

    const loginData = {
      username: username,
      name: name,
      email: email,
      bio: bio,
      profile_image: profile_image
    }

    axios.post('http://127.0.0.1:5000/login', loginData)
    .then(res => {
      const token = res.data.token;
      if (token) {
        localStorage.setItem('accessToken', token);
      }
      history.push(routes.LANDING);

      console.log("Login Successful.");
    })
    .catch(function (error) {
      console.log(error);
      console.log("Login Failed.");
    });

    event.preventDefault();
  }

  render() {

    const {
      username,
      name,
      email,
      bio,
      profile_image,
      error,
    } = this.state;

    const isInvalid =
      username === '' ||
      name === '' ||
      email === '';

    return (
      <div className="">
        <div className="m-lm-content rounded">
          <h3 className="m-lm-header-text">Update your profile</h3>
          <h4 className="m-lm-sub-text">Refresh yourself!</h4>
          <form onSubmit={this.onSubmit}>
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={username}
              onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
              type="text"
              placeholder="Username"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={name}
              onChange={event => this.setState(updateByPropertyName('name', event.target.value))}
              type="text"
              placeholder="Name"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={bio}
              onChange={event => this.setState(updateByPropertyName('bio', event.target.value))}
              type="text"
              placeholder="Bio"
            />
            <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
              Update Profile
            </button>

            { error && <p>{error.message}</p> }
          </form>
        </div>
      </div>
    );
  }
}


export default Account;