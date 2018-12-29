import React, { Component } from 'react';
import axios from 'axios';

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  
const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForget extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE };
    }

    render() {
        const {
            email,
            error
          } = this.state;
      
        const isInvalid = (email === '')
        
        return(
            <div className="">
            <div className="m-lm-content rounded">
              <h3 className="m-lm-header-text">Forgot your password.</h3>
              <h4 className="m-lm-sub-text">Enter your email account and we'll send you a reset link.</h4>
              <form onSubmit={this.onSubmit}>
                <input
                  className="mr-sm-2 m-lm-input rounded"
                  value={email}
                  onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
                  type="text"
                  placeholder="Email"
                />

                <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
                  Sign In
                </button>
    
                { error && <p>{error.message}</p> }
    
              </form>
            </div>
          </div>
        )
    }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export { PasswordForget, PasswordForgetLink }