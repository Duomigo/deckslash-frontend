import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Home.css';
import '../styles/User.css';
import '../styles/AuthenLogin.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthenLogin from './AuthenLogin.js';

class AuthenRegister extends Component {

    registerNewUser() {
        console.log('testicle')
        axios.post(`http://127.0.0.1:5000/register`, {
            "​name": "Mason Dixon",
            "​username": "mason1",
            "​password": "dixon",
            "​confirm_password": "dixon"
        })
        .then(function(response) {
          console.log(response);
          console.log("Thanh Cong")
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    testfunx() {
        axios.get(`http://127.0.0.1:5000/testuser`, { 
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
            }).then(response => {
                // If request is good...
                console.log(response.data);
            })
            .catch((error) => {
                console.log('error 3 ' + error);
            });
    }

    render() {
        return (
          <div className="m-lm-background-signup">
            <div className="m-lm-content rounded">
                <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Continue with Facebook</button>
                <button className="form-control mr-sm-2 m-lm-button">Continue with Google</button>
                <hr/>
                <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Username" aria-label="username" />
                <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Password" aria-label="password" />

                {/* Button */}
                <form onSubmit={this.testfunx}>
                    <button type="submit" className="btn form-control mr-sm-2 m-lm-button" style={{backgroundColor: 'rgb(255,45,85)', color: '#eceff1'}}>
                        Sign up
                    </button>
                </form>

                <hr/>
                <t className="m-lm-text">
                    Already have an account?
                    <a className="m-lm-signup-text" href="/login">
                        Log in
                    </a>
                </t>
            </div>
          </div>
        );
    }
}

export default AuthenRegister;