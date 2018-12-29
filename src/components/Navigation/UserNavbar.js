import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/dplogo.svg';
import '../../styles/Home.css';
import axios from 'axios';

import SignOutButton from '../Authentication/SignOut';

import * as routes from '../../constants/routes';
import newB from '../../images/m-new.svg'
import profileB from '../../images/m-user.svg'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

class UserNavbar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  async componentDidMount() {

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    var header = {
        "Access-Control-Allow-Origin": 'content-type',
        "Authorization": bearer
    }

    const res = await axios.get('http://127.0.0.1:5000/profile', { headers: header });
    await this.setState({ currentUser: res.data.user.username })
  }

  render() {
    const profilePath = "/u/" + this.state.currentUser;
    console.log(profilePath)
    return (
      <nav className="navbar navbar-expand-lg navbar-style">
        <a className="navbar-brand" href="/">
          <img src={logo} width="125" height="25" alt="Deckslash-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
            <Link className="navbar-button" to={routes.NEW}>
              <img src={newB} width="25" height="25" alt="New"/>
            </Link>
            <a className="navbar-button" href={profilePath}>
              <img src={profileB} width="25" height="25" alt="Profile"/>
            </a>
            <SignOutButton />
        </div>
      </nav>
    )
  }
}

export default UserNavbar;