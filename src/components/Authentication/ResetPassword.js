import React, { Component } from 'react';
import axios from 'axios';

import * as routes from '../../constants/routes'
import { Link, withRouter } from 'react-router-dom'

import { NotificationLists } from './AuthenStatus'

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  
const INITIAL_STATE = {
    password: '',
    confirm_password: '',
    notification: null
};

class ResetPassword extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            ...INITIAL_STATE 
        };

        this.token = props.match.params.token;
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit = (event) => {
    
        const {
          history,
        } = this.props;
    
        const emailAdd = {
          password: this.state.password,
          confirm_password: this.state.confirm_password
        }
    
        axios.post('http://127.0.0.1:5000/reset_password/' + this.token, emailAdd)
        .then(res => {
          console.log(res.data)
          history.push(routes.SIGN_IN)
        })
        .catch(err => {
          console.log(err.response)
          console.log(err.response.data.msg)
          this.setState({ notification: err.response.data.msg })
        });
    
        event.preventDefault();
      }

    render() {
        const {
            password,
            confirm_password,
            notification
          } = this.state;
      
        const isInvalid = 
            password === '' ||
            confirm_password === '';
        
        return(
            <div className="">
            <div className="m-lm-content rounded">
              <h3 className="m-lm-header-text">Reset your password.</h3>
              <h4 className="m-lm-sub-text">Enter your new password.</h4>
              <form onSubmit={this.onSubmit}>
                <input
                  className="mr-sm-2 m-lm-input rounded"
                  value={password}
                  onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                  type="password"
                  placeholder="Password"
                />

                <input
                  className="mr-sm-2 m-lm-input rounded"
                  value={confirm_password}
                  onChange={event => this.setState(updateByPropertyName('confirm_password', event.target.value))}
                  type="password"
                  placeholder="Confirm Password"
                />

                <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
                  Reset Password
                </button>
    
                { notification && <NotificationLists noti={notification} /> }
    
              </form>
            </div>
          </div>
        )
    }
}

export default withRouter(ResetPassword);