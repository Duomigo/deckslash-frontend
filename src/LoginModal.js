import React, { Component } from 'react';
import Modal from 'react-modal'
import RegisterModal from './RegisterModal.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './User.css';
import './LoginModal.css'
import closeButton from './close-icon.png'

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      showLoginModal: false,
      showregisterModal: false,
      logInTab: true
    };

    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this)
    this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this)

    this.handleOpenRegisterModal = this.handleOpenRegisterModal.bind(this)
    this.handleCloseRegisterModal = this.handleCloseRegisterModal.bind(this)

    this.handleAuthenticationModal = this.handleAuthenticationModal.bind(this)
  }

  handleOpenLoginModal() {
    this.setState({ showLoginModal: true });
  }

  handleCloseLoginModal() {
    this.setState({ showLoginModal: false });
  }

  handleOpenRegisterModal() {
    this.setState({ showRegisterModal: true });
  }

  handleCloseRegisterModal() {
    this.setState({ showRegisterModal: false });
  }

  handleAuthenticationModal() {
    this.setState({ logInTab: !this.state.logInTab});
  }

  renderModal() {
    if (this.state.logInTab) {
      console.log('hahah');
      return (
        <Modal
          isOpen = {this.state.showLoginModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseLoginModal}
          className="m-lm rounded"
          overlayClassName="m-lm-overlay"
        >
          <div className="m-lm-content">
            <input className="m-lm-close-button" type="image" src={closeButton} alt="closebutton" onClick={this.handleCloseLoginModal} />
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
              <t 
                className="m-lm-signup-text" 
                src={closeButton} alt="closebutton" 
                onClick={this.handleAuthenticationModal}
              >
                Sign up
              </t>
            </t>
          </div>
        </Modal>
      );
    } else {
      console.log('hoho');
      return (
        <Modal
          isOpen = {this.state.showRegisterModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleOpenRegisterModal}
          className="m-lm rounded"
          overlayClassName="m-lm-overlay"
        >
          <div className="m-lm-content">
            <input className="m-lm-close-button" type="image" src={closeButton} alt="closebutton" onClick={this.handleCloseRegisterModal} />
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
              <t className="m-lm-signup-text" src={closeButton} alt="closebutton" onClick={this.handleCloseRegisterModal}>
                Log in
              </t>
            </t>
          </div>
        </Modal>
      );
    }
  }


  render() {
    return (
      <div>
        <button className="btn navbar-button">Log In</button>
        {this.renderModal()}

        
      </div>
    );
  }
}

export default LoginModal;
