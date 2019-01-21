import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/mojito.svg';
import '../../styles/Home.css';

import profileB from '../../images/m-user.svg'
import searchB from '../../images/m-search.svg'

import * as routes from '../../constants/routes';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class GuestNavbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-style">
        <a className="navbar-brand" href="/">
          <img src={logo} width="150" height="30" alt="Deckslash-logo" />
        </a>

        <div className="navbar-nav ml-auto" id="navbarSupportedContent">
          <div className="row">
            <Link className="navbar-button" to={routes.SEARCH}>
              <img src={searchB} width="25" height="25" alt="Profile"/>
            </Link>
            <Link className="navbar-button" to={routes.SIGN_IN}>
              <img src={profileB} width="25" height="25" alt="Profile"/>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default GuestNavbar;