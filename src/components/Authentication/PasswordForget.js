import React, { Component } from 'react';
import axios from 'axios';

import * as routes from '../../constants/routes'
import { Link, withRouter } from 'react-router-dom'

import { NotificationLists } from './AuthenStatus'

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  
const INITIAL_STATE = {
    email: '',
    notification: ''
};

class PasswordForget extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE };

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit = (event) => {
    
        this.setState.notification = '';
    
        const emailAdd = {
          email: this.state.email,
        }
    
        axios.post('https://mojitobooks.pythonanywhere.com/reset_password', emailAdd)
        .then(res => {
          this.setState({ notification: res.data.msg[0]})
        })
        .catch(err => {
          this.setState({ notification: err.response.data.msg })
        });
    
        event.preventDefault();
      }

    render() {
        const {
            email,
            notification
          } = this.state;
      
        const isInvalid = (email === '')
        
        return(
            <div className="">
            <div className="m-lm-content rounded">
              <h3 className="m-lm-header-text">Forgot your password.</h3>
              <h4 className="m-lm-sub-text">Enter your email address.</h4>

              { notification && <NotificationLists noti={notification} />}

              <form onSubmit={this.onSubmit}>
                <input
                  className="mr-sm-2 m-lm-input rounded"
                  value={email}
                  onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                  type="text"
                  placeholder="Email"
                />

                <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
                  Reset Password
                </button>
    
              </form>
            </div>
          </div>
        )
    }
}

export const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default withRouter(PasswordForget);