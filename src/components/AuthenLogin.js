import React, { Component } from 'react';
import '../styles/Home.css';
import '../styles/User.css';
import '../styles/AuthenLogin.css'

class AuthenLogin extends Component {
    render() {
        return (
          <div className="m-lm-background-login">
            <div className="m-lm-content rounded">
              <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Log in with Facebook</button>
              <button className="form-control mr-sm-2 m-lm-button">Log in with Google</button>
              <hr/>
              <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Username" />
              <input className="form-control mr-sm-2 m-lm-input" type="password" placeholder="Password" />
              <a href="https://google.com">
                <button className="btn form-control mr-sm-2 m-lm-button" style={{backgroundColor: 'rgb(255,45,85)', color: '#eceff1'}}>
                  Log in
                </button>
              </a>
              <t className="m-lm-text">Forgot password?</t>
              <hr/>
              <t className="m-lm-text">
                Don't have an account?
                <a className="m-lm-signup-text" href="/signup">
                  Sign up
                </a>
              </t>
            </div>
          </div>
        );
    }
}

export default AuthenLogin;