import React, { Component } from 'react';
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './User.css';
import './LoginModal.css'
import closeButton from './close-icon.png'

class RegisterModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
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
        <button className="btn navbar-button" onClick={this.handleOpenModal}>Log In</button>
        <Modal
          isOpen = {this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="m-lm rounded"
          overlayClassName="m-lm-overlay"
        >
          <div className="m-lm-content">
            <input className="m-lm-close-button" type="image" src={closeButton} alt="closebutton" onClick={this.handleCloseModal} />

            <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Continue with Facebook</button>
            <button className="form-control mr-sm-2 m-lm-button">Continue with Google</button>

            <hr/>

            <a href="https://google.com">
              <button className="btn form-control mr-sm-2 m-lm-button" style={{backgroundColor: 'rgb(255,45,85)', color: '#eceff1'}}>
                Continue with Email
              </button>
            </a>

            <hr/>

            <t className="m-lm-text">
              Already have an account?
              <a href="https://google.com">
                Log in
              </a>
            </t>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
