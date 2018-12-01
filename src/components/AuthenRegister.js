import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import GuestNavbar from './GuestNavbar.js';

// import { SignInLink } from '../SignIn';

// import { auth, db } from '../../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
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
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

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

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <div className="">
        <GuestNavbar />
        <div className="m-lm-content rounded">
          <h3 className="m-lm-header-text">Welcome to Deckpath!</h3>
          <h4 className="m-lm-sub-text">Create an account.</h4>
          <form onSubmit={this.onSubmit}>
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={username}
              onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
              type="text"
              placeholder="Full Name"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email Address"
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
            <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
              Sign Up
            </button>

            {/* <div className="m-lm-text">
              <SignInLink />
            </div> */}

            { error && <p>{error.message}</p> }
          </form>

        </div>
      </div>
    );
  }
}

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
