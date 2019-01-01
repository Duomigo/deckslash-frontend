import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';
import axios from 'axios';

import { Route, Redirect } from 'react-router-dom'
import * as routes from '../../constants/routes'

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: props.currentUser,
            userLoading: props.userLoading
        }
    }

    render() {

        const { currentUser, userLoading } = this.state
        const profilePath = "/u/" + currentUser;

        return (
            <Route 
                render={() => (
                userLoading ?
                    <Redirect to={routes.SIGN_IN} /> :
                    <Redirect to={profilePath} />
                )} 
            />
        )
      }
}

export default Profile