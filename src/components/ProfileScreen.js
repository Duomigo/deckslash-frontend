
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import '../styles/User.css';

import Account from './Account.js'

import Modal from 'react-modal';

import editlogo from '../images/edit-logo.svg';

class ProfileScreen extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        user: props.userData.user,
        cards: props.userData.cards,
        modalIsOpen: false
      }

      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }


    closeModal() {
      this.setState({modalIsOpen: false});
    }
    
    render() {
      const { user, cards } = this.state;
      const baseUrl = 'http://127.0.0.1:5000'

      const customStyles = {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(125, 125, 125, 0.7)'
        },
        content: {
          position: 'absolute',
          top: '45%',
          left: '50%',
          height: '550px',
          width: '400px',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      };
  
      return (
  
        <div className=" container-fluid">
  
          <div className="row text-align-center justify-content-center">
            <div className="col-12">
              <div className="row m-profile-info col-lg-6 col-md-10 col-sm-* col-xs-*">
                <div className="m-profile-left">
                  <img className="rounded-circle m-profile-avatar" src={baseUrl + user.profile_image} alt="" />     
                </div>
                <div className="m-profile-right">
                  <t className="m-profile-name">{user.name}</t>

                  <a>
                    <a onClick={this.openModal}>
                      <img src={editlogo} width="20" height="20" style={{marginLeft: "10px", marginBottom:"10px"}} alt=""/>               
                    </a>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onRequestClose={this.closeModal}
                      contentLabel="Example Modal"
                      style={customStyles}
                    >

                      <Account profileData={this.state.user} />

                    </Modal>
                  </a>

                  <t className="m-profile-username">@{user.username}</t>
                  <t className="m-profile-desc">{user.bio}</t>                           
                </div>
              </div>
              <div className="m-profile-filter">
                <button className="btn m-profile-button" type="submit">{cards.length} Books</button>
                <button className="btn m-profile-button" type="submit">10 Following</button>
                <button className="btn m-profile-button" type="submit">88 Followers</button>
              </div> 
            </div>
  
            <div className="m-profile-card-container col-lg-6 col-md-10 col-sm-* col-xs-*">           
              {cards.map(function (card, i) { // map function with server data
                return (
                  <div className="m-profile-whole-card-cover rounded" key={i}>
                    <img className="card-img-top m-profile-card-cover rounded" src={baseUrl + card.picture} alt="" />
                    <p className="m-profile-card-text">{card.title}</p>
                    <p className="m-profile-desc-text">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      );
    }
  }

export default ProfileScreen;