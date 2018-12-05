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

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    const loginData = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('http://127.0.0.1:5000/login', loginData)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      history.push(routes.LANDING);

      console.log("Token is " + token);
      console.log(res);
      console.log("Login Successful.");
    })
    .catch(function (error) {
      console.log(error);
      console.log("Login Failed.");
    });

    isAuth();
    console.log("Finished.")

    // auth.doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState(() => ({ ...INITIAL_STATE }));
    //     history.push(routes.HOME);
    //   })
    //   .catch(error => {
    //     this.setState(updateByPropertyName('error', error));

    event.preventDefault();
  }

  render() {
    const {
      username,
      password,
      error,
    } = this.state;

    const isInvalid =
      username === '' ||
      password === '';

    return (
      <div className="">
        <div className="m-lm-content rounded">
          <h3 className="m-lm-header-text">Welcome back!</h3>
          <h4 className="m-lm-sub-text">Log In.</h4>
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
              value={password}
              onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
              type="password"
              placeholder="Password"
            />
            <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
              Sign In
            </button>

            { error && <p>{error.message}</p> }
            
            {/* <div className="m-lm-text">
              <PasswordForgetLink />
            </div> */}
            <div className="m-lm-text">
              <SignUpLink />
            </div>
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
    <Link to={routes.SIGN_IN}>Log In</Link>
  </p>

export default withRouter(SignInPage);

export {
  SignInForm,
  SignInLink
};