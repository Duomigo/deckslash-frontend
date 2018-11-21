import React, { Component } from 'react';
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './User.css';
import './LoginModal.css'
import closeButton from './close-icon.png'
import LoginModal from './LoginModal.js'

class RegisterModal extends Component {
  constructor() {
    super();
    this.state = {
      showRegisterModal: false
    };

    this.handleOpenRegisterModal = this.handleOpenRegisterModal.bind(this)
    this.handleCloseRegisterModal = this.handleCloseRegisterModal.bind(this)
  }

  handleRegisterOpenModal() {
    this.setState({ showRegisterModal: true });
  }

  handleRegisterCloseModal() {
    this.setState({ showRegisterModal: false });
  }

  render() {
    return (
      <div>
        <button className="btn navbar-button" onClick={this.handleRegisterOpenModal}>Log In</button>
        <Modal
          isOpen = {this.state.showRegisterModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleRegisterCloseModal}
          className="m-lm rounded"
          overlayClassName="m-lm-overlay"
        >
          <div className="m-lm-content">
            <input className="m-lm-close-button" type="image" src={closeButton} alt="closebutton" onClick={this.handleRegisterCloseModal} />
            <t className="m-lm-authen-header">Log In</t>

            <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Log in with Facebook</button>
            <button className="form-control mr-sm-2 m-lm-button">Log in with Google</button>

            <hr/>

            <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Username" aria-label="username" />
            <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Password" aria-label="password" />

            <a href="https://google.com">
              <button className="btn form-control mr-sm-2 m-lm-button" style={{backgroundColor: 'rgb(100,100,100)', color: '#eceff1'}}>
                Log in
              </button>
            </a>

            <t className="m-lm-text">Forgot password?</t>
            <hr/>
            <t className="m-lm-text">
              Don't have an account?
              <t className="m-lm-signup-text" src={closeButton} alt="closebutton" onClick={this.handleRegisterCloseModal}>
                Sign up
              </t>
            </t>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
