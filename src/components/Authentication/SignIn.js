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
import outB from '../../images/m-out.svg'

export function doSignIn() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/signin"
}

class SignInButton extends Component {
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
          <img src={outB} width="25" height="25" alt="Out"/>
        </button>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Avatar"
          style={signoutStyle}
        >
          <p className="m-profile-modal-title">Clap post?</p>
          <p className="m-profile-modal-desc">You must log in to clap your favorite post.</p>

          <button
            className="mr-sm-2 m-lm-modal-proceed-button rounded float-right"
            type="button"
            onClick={doSignIn}
          >
            <a className="m-lm-signout-link">Sign In</a>
          </button>

          <button 
            className="mr-sm-2 m-lm-modal-return-button rounded float-right"
            type="button"
            onClick={this.handleCloseModal}
          >
            Cancel
          </button>

        </Modal>
      </div>
    )
  }
  
}

export default SignInButton;