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

import { editCardStyle } from '../../styles/style.js'
import editlogo from '../../images/m-edit.svg';

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });

class RemoveCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      id: props.card.id,
      title: props.card.title,
      description: props.card.description
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

  onClickSubmit = (event) => {
    const {
      title,
      description,
      id
    } = this.state;

    const {
      history,
    } = this.props;

    const updateData = {
        title: title,
        description: description
    }

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    var header = {
        "Access-Control-Allow-Origin": 'X-Requested-With,content-type',
        "Authorization": bearer
    }

    axios.put('http://127.0.0.1:5000/post/' + id, updateData, { headers: header })
    .then(res => {
      window.location.reload()
    })
    .catch(function (error) {
    });

    event.preventDefault();
  }

  render() {
    const {
        title,
        description,
        error,
    } = this.state;

    return (
      <div>
        <a
          onClick={this.handleOpenModal}
        >
          <img className="m-edit-logo" src={editlogo} alt=""/>
        </a>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Avatar"
          style={editCardStyle}
        >
            <h3 className="m-lm-header-text">Update your post.</h3>
            <h4 className="m-lm-sub-text">Make it your best effort!</h4>

            <div>
              <form onSubmit={this.onClickSubmit}>
                <input
                  className="m-lm-ghost-input-title justify-content-center"
                  value={title}
                  onChange={event => this.setState(updateByPropertyName('title', event.target.value))}
                  type="text"
                  placeholder="Add A Title"
                />
                <textarea
                  className="m-lm-ghost-input"
                  value={description}
                  onChange={event => this.setState(updateByPropertyName('description', event.target.value))}
                  type="text"
                  placeholder="Say more about this book ..."
                />
                <button className="mr-sm-2 m-lm-update-card-button rounded" type="submit">
                  Update Post
                </button>
              </form>
            </div>

        </Modal>
      </div>
    )
  } 
}

export default RemoveCard;