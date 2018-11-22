import React, { Component } from 'react';
import Modal from 'react-modal'
import LoginModal from './RegisterModal.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './User.css';
import './LoginModal.css'
import closeButton from './close-icon.png'

class RegisterModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button className="btn navbar-button" onClick={this.handleOpenModal}>Sign Up</button>
        <Modal
          isOpen = {this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="m-lm rounded"
          overlayClassName="m-lm-overlay"
        >
          <div className="m-lm-content">
            <input className="m-lm-close-button" type="image" src={closeButton} alt="closebutton" onClick={this.handleCloseModal} />
            Register
            <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Sign up with Facebook</button>
            <button className="form-control mr-sm-2 m-lm-button">Sign up with Google</button>
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
              Already have an account?
              <t className="m-lm-signup-text" src={closeButton} alt="closebutton" onClick={this.handleCloseModal}>
                <LoginModal />
              </t>
            </t>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
