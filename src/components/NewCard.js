import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import '../styles/User.css';
import '../styles/AuthenLogin.css'

import axios from 'axios';
import * as routes from '../constants/routes';

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });

const INITIAL_STATE = {
    title: '',
    description: '',
    link: '',
  };

class CreateCard extends Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE };
    }
  
    onSubmit = (event) => {
      const {
        history,
      } = this.props;
  
      const cardData = {
        title: this.state.title,
        description: this.state.description,
        link: this.state.link
      }

      const bearer = 'Bearer ' + localStorage.getItem("accessToken")

      var header = {
          "Access-Control-Allow-Origin": 'X-Requested-With,content-type',
          "Authorization": bearer
      }
  
      axios.post('http://127.0.0.1:5000/cards', cardData, { headers: header })
      .then(res => {
        history.push(routes.LANDING);
        console.log("New card successfully created.")
      })
      .catch(function (error) {
        console.log(error);
        console.log("Cannot create new card.");
      });
  
      event.preventDefault();
    }
  
    render() {
      const {
        title,
        description ,
        link,
      } = this.state;
  
      const isInvalid =
        title === '' ||
        description === '';
  
      return (
        <div className="">
          <div className="m-lm-content rounded">
            <h3 className="m-lm-header-text">New Book Review</h3>
            <h4 className="m-lm-sub-text">What did you read?</h4>
            <form onSubmit={this.onSubmit}>
              <input
                className="mr-sm-2 m-lm-input rounded"
                value={title}
                onChange={event => this.setState(updateByPropertyName('title', event.target.value))}
                type="text"
                placeholder="Title"
              />
              <input
                className="mr-sm-2 m-lm-input rounded"
                value={description}
                onChange={event => this.setState(updateByPropertyName('description', event.target.value))}
                type="text"
                placeholder="Description"
              />
              <input
                className="mr-sm-2 m-lm-input rounded"
                value={link}
                onChange={event => this.setState(updateByPropertyName('link', event.target.value))}
                type="text"
                placeholder="Link"
              />

              <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
               Create Card
              </button>

            </form>
          </div>
        </div>
      );
    }
  }

export default CreateCard;