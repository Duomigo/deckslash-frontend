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

import axios from 'axios';
import Modal from 'react-modal';

import { signoutStyle } from '../../styles/style.js'
import newlogo from '../../images/m-trash.svg';

class RemoveCard extends Component {
  constructor(props) {
    super(props)

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

  removeCard(id) {
    var deleteRoute = 'http://127.0.0.1:5000/post/' + id

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    var header = {
        "Access-Control-Allow-Origin": 'X-Requested-With,content-type',
        "Authorization": bearer
    }

    axios.delete(deleteRoute, { headers: header })
    .then(res => {
      window.location.reload()
    })
    .catch(err => {

    })
  }

  render() {
    return (
      <div>
        <a
          onClick={this.handleOpenModal}
        >
          <img className="m-remove-logo" src={newlogo} alt=""/>
        </a>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Avatar"
          style={signoutStyle}
        >
          <p className="m-profile-modal-title">Remove Post?</p>
          <p className="m-profile-modal-desc">Are you sure you want to remove this post. Posts can't be recovered once deleted?</p>

          <button
            className="mr-sm-2 m-lm-modal-proceed-button rounded float-right"
            type="button"
            onClick={() => this.removeCard(this.props.cardId)}
          >
            {/* <Link className="m-lm-signout-link" to={routes.LANDING}>Delete</Link> */}
            Remove
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

export default RemoveCard;