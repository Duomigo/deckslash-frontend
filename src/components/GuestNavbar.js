import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg';
import '../styles/Home.css';
import AuthenLogin from "./AuthenLogin.js";

class GuestNavbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-style">
        <a className="navbar-brand" href="/">
          <img src={logo} width="45" height="45" style={{marginLeft: 15}} alt="Deckslash-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 navbar-search" type="search" placeholder="Explore Deckslash" aria-label="Search" />
            <button className="btn navbar-button" type="submit">Search</button>
          </form>
          <a className="btn navbar-button" href="/login">
            Log In
          </a>
          <a className="btn get-started-button" href="/signup">
            Sign Up
          </a>
        </div>
      </nav>
    )
  }
}

export default GuestNavbar;
