import React from 'react';
import * as routes from '../constants/routes';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

function doSignOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken")
}

const SignOutButton = () =>
  <button
    className="navbar-signout-button"
    type="button"
    onClick={doSignOut}
  >
    <Link className="navbar-signout-button" to={routes.LANDING}>Sign Out</Link>
  </button>

export default SignOutButton;