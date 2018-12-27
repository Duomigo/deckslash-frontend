import React, { Component } from 'react';
import * as routes from '../../constants/routes';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import ImageUpload from '../Account/ImageUpload.js';
import '../../styles/Home.css';
import '../../styles/User.css';
import '../../styles/AuthenLogin.css'

import Modal from 'react-modal';
import { signoutStyle } from '../../styles/style.js'

function doSignOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken")
}

class SignOutButton extends Component {
  constructor() {
    super()

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button
          className="navbar-signout-button"
          type="button"
          onClick={this.handleOpenModal}
        >
          Sign Out
        </button>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Avatar"
          style={signoutStyle}
        >
          <p className="m-profile-modal-title">Sign out?</p>
          <p className="m-profile-modal-desc">If so, we wish you a wonderful day with your friends and family.</p>

          <button
            className="mr-sm-2 m-lm-modal-proceed-button rounded float-right"
            type="button"
            onClick={doSignOut}
          >
            <Link className="m-lm-signout-link" to={routes.LANDING}>Sign Out</Link>
          </button>

          <button 
            className="mr-sm-2 m-lm-modal-return-button rounded float-right"
            type="button"
            onClick={this.handleCloseModal}
          >
            Return
          </button>

        </Modal>
      </div>
    )
  }
  
}

export default SignOutButton;