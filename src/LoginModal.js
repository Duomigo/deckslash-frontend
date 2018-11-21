import React, { Component } from 'react';
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './User.css';
import './LoginModal.css'
import closeButton from './close-icon.png'
import RegisterModal from './RegisterModal.js'

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      showLoginModal: false
    };

    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this)
    this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this)
  }

  handleOpenLoginModal() {
    this.setState({ showLoginModal: true });
  }

  handleCloseLoginModal() {
    this.setState({ showLoginModal: false });
  }

  render() {
    return (
      <div>
        <button className="btn navbar-button" onClick={this.handleLoginOpenModal}>Log In</button>
        <Modal
          isOpen = {this.state.showLoginModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseLoginModal}
          className="m-lm rounded"
          overlayClassName="m-lm-overlay"
        >
          <div className="m-lm-content">
            <input className="m-lm-close-button" type="image" src={closeButton} alt="closebutton" onClick={this.handleCloseLoginModal} />
            <t className="m-lm-authen-header">Log In</t>

            <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Log in with Facebook</button>
            <button className="form-control mr-sm-2 m-lm-button">Log in with Google</button>

            <hr/>

            <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Username" aria-label="username" />
            <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Password" aria-label="password" />

            <a href="https://google.com">
              <button className="btn form-control mr-sm-2 m-lm-button" style={{backgroundColor: 'rgb(255,45,85)', color: '#eceff1'}}>
                Log in
              </button>
            </a>

            <t className="m-lm-text">Forgot password?</t>
            <hr/>
            <t className="m-lm-text">
              Don't have an account?
              <t className="m-lm-signup-text" src={closeButton} alt="closebutton" onClick={this.handleLoginOpenRegisterModal}>
                Sign up
              </t>
            </t>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
