import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/dplogo.svg';
import '../../styles/Home.css';

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
          <img src={logo} width="125" height="25" alt="Deckslash-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
            <Link className="navbar-button" to={routes.SEARCH}>Search</Link>
            <Link className="navbar-button" to={routes.SIGN_IN}>Log In</Link>
            <Link className="navbar-button" to={routes.SIGN_UP}>Sign Up</Link>
        </div>
      </nav>
    )
  }
}

export default GuestNavbar;