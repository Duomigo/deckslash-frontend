import React, { Component } from 'react';
import Modal from 'react-modal'
import { Tab, Tabs, TabList,  TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './User.css';
import './LoginModal.css'
import closeButton from './close-icon.png'

class LoginModal extends Component {
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
        <button className="btn navbar-button" onClick={this.handleOpenModal}>Log In</button>
        <Modal
          isOpen = {this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="m-lm rounded"
          overlayClassName="m-lm-overlay"
        >
          <Tabs>
            <TabList>
              <Tab className="occho">
                <div className="jenn">
                  Log In
                </div>
              </Tab>
              <Tab className="occho">
                <div className="jenn">
                  Sign Up
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="m-lm-content">
                <input className="m-lm-close-button" type="image" src={closeButton} alt="closebutton" onClick={this.handleCloseModal} />
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
                  <t className="m-lm-signup-text" src={closeButton} alt="closebutton" onClick={this.handleCloseModal}>
                    Sign up
                  </t>
                </t>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Signup contents</h2>
            </TabPanel>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
