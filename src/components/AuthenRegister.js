import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Home.css';
import '../styles/User.css';
import '../styles/AuthenLogin.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthenLogin from './AuthenLogin.js';

class AuthenRegister extends Component {

    constructor(props) {
        super(props);

    this.registerNewUser = this.registerNewUser.bind(this);
    this.testfunx = this.testfunx.bind(this);
    }

    registerNewUser(event) {
        console.log('testicle')
        axios.post('http://127.0.0.1:5000/register', {
            name: "Eugene McDermott",
            username: "eugene1",
            password: "macdermott",
            confirm_password: "mcdermott"
        })
        .then(function(response) {
          console.log(response);
          console.log("Successful registered new user.")
        })
        .catch(function (error) {
          console.log(error);
          console.log("Failed to register.");
        });
        event.preventDefault();
      }

    testfunx(event) {
        console.log("do Co mo")
        axios.get(`http://127.0.0.1:5000/testcard`, { 
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
            }).then(response => {
                // If request is good...
                console.log(response.data);
                console.log(response.json())
            })
            .catch((error) => {
                console.log('error 3 ' + error);
            });
        event.preventDefault();
    }

    render() {
        return (
          <div className="m-lm-background-signup">
            <div className="m-lm-content rounded">
                <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Continue with Facebook</button>
                <button className="form-control mr-sm-2 m-lm-button">Continue with Google</button>
                <hr/>
                <input className="form-control mr-sm-2 m-lm-input" placeholder="Name" aria-label="name" />
                <input className="form-control mr-sm-2 m-lm-input" placeholder="Username" aria-label="username" />
                <input className="form-control mr-sm-2 m-lm-input" placeholder="Password" aria-label="password" />
                <input className="form-control mr-sm-2 m-lm-input" placeholder="Confirm Password" aria-label="password" />

                {/* Button */}
                <form onSubmit={this.registerNewUser}>
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