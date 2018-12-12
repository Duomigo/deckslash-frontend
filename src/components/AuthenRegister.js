import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import GuestNavbar from './Navigation/GuestNavbar.js';

import axios from 'axios';

// import { SignInLink } from '../SignIn';

// import { auth, db } from '../../firebase';
import * as routes from '../constants/routes';
import { throws } from 'assert';
import { runInThisContext } from 'vm';

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  name: '',
  username: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      name,
      username,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    console.log({
      email: this.state.email,
      name: this.state.name,
      username: this.state.username,
      password: this.state.passwordOne,
      confirm_password: this.state.passwordTwo
    })

    axios.post('http://127.0.0.1:5000/register', {
        email: this.state.email,
        name: this.state.name,
        username: this.state.username,
        password: this.state.passwordOne,
        confirm_password: this.state.passwordTwo
      })
      .then(function(response) {
        history.push(routes.SIGN_IN);

        console.log(response);
        console.log("Successful registered new user.")
      })
      .catch(function (error) {
        //this.setState(updateByPropertyName('error', error));
        console.log(error);
        console.log("Failed to register.");
    });
        
    event.preventDefault();

    // auth.doCreateUserWithEmailAndPassword(email, passwordOne)
    //   .then(authUser => {

    //     // Create a user in your own accessible Firebase Database too
    //     db.doCreateUser(authUser.user.uid, username, email)
    //       .then(() => {
    //         this.setState(() => ({ ...INITIAL_STATE }));
    //         history.push(routes.HOME);
    //       })
    //       .catch(error => {
    //         this.setState(updateByPropertyName('error', error));
    //       });

    //   })
    //   .catch(error => {
    //     this.setState(updateByPropertyName('error', error));
    //   });

  }

  render() {
    const {
      email,
      username,
      name,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      email === '' ||
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      name === '';

    return (
      <div className="">
        <div className="m-lm-content rounded">
          <h3 className="m-lm-header-text">Welcome to Deckpath!</h3>
          <h4 className="m-lm-sub-text">Create an account.</h4>
          <form onSubmit={this.onSubmit}>
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={name}
              onChange={event => this.setState(updateByPropertyName('name', event.target.value))}
              type="text"
              placeholder="Full Name"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={username}
              onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
              type="text"
              placeholder="Username"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={passwordOne}
              onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
              type="password"
              placeholder="Password"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={passwordTwo}
              onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
              type="password"
              placeholder="Confirm Password"
            />
            <button className="mr-sm-2 m-lm-button rounded" type="submit">
              Sign Up
            </button>

            <div className="m-lm-text">
              <SignInLink />
            </div>

            { error && <p>{error.message}</p> }
          </form>

        </div>
      </div>
    );
  }
}

const SignInLink = () =>
  <p>
    Have an account?
    {' '}
    <Link to={routes.SIGN_IN}>Sign In</Link>
  </p>

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
  
export default withRouter(SignUpPage);
export {
  SignUpForm,
  SignUpLink,
};
