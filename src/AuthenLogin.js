import React, { Component } from 'react';
import './App.css';
import './User.css';
import './AuthenLogin.css'

class AuthenLogin extends Component {
    render() {
        return (
          <div className="m-lm-background-login">
            <div className="m-lm-content rounded">
              <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Log in with Facebook</button>
              <button className="form-control mr-sm-2 m-lm-button">Log in with Google</button>
              <hr/>
              <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Username" aria-label="username" />
              <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Password" aria-label="password" />
              <a href="https://google.com">
                <button className="btn form-control mr-sm-2 m-lm-button" style={{backgroundColor: 'rgb(255,45,85)', color: '#eceff1'}}>
                  Log in
                </button>
              </a>
              <t className="m-lm-text">Forgot password?</t>
              <hr/>
              <t className="m-lm-text">
                Don't have an account?
                <t className="m-lm-signup-text">
                  Sign up
                </t>
              </t>
            </div>
          </div>
        );
    }
}

export default AuthenLogin;