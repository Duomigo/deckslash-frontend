import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-style">
        <a className="navbar-brand" href="https://google.com">
          <img src={logo} width="45" height="45" style={{marginLeft: 15}} alt="Deckslash-logo" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 navbar-search" type="search" placeholder="Explore Deckslash" aria-label="Search" />
            <button class="btn navbar-button" type="submit">Search</button>
          </form>
          <button class="btn navbar-button" type="submit">Log In</button>
          <button class="btn get-started-button" type="submit">Get Started</button>
        </div>
      </nav>
    )
  }
}

export default Navbar;
