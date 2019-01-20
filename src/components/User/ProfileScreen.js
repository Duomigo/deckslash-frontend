
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';

import Account from '../Account/Account.js'
import ImageUpload from '../Account/ImageUpload.js'
import EditCard from '../Card/EditCard.js'

import Modal from 'react-modal';
import EmojiTags from '../Emoji/EmojiTags';

import { profileStyle } from '../../styles/style.js'
import { goToCard, convertJoinDate } from '../Authentication/AuthenStatus.js'

import axios from 'axios';

class ProfileScreen extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        user: props.userData.user,
        cards: props.userData.cards,
        sumclap: props.userData.sumclap,
        profileModalIsOpen: false, 
        imageModalIsOpen: false,   
        cardModalIsOpen: false
      }

      this.openProfileModal = this.openProfileModal.bind(this)
      this.closeProfileModal = this.closeProfileModal.bind(this)

      this.openImageModal = this.openImageModal.bind(this)
      this.closeImageModal = this.closeImageModal.bind(this)
    }

    componentDidMount() {
      Modal.setAppElement('body');
    }

    openProfileModal() {
      this.setState({ profileModalIsOpen: true });
    }

    closeProfileModal() {
      this.setState({ profileModalIsOpen: false });
    }

    openImageModal() {
      this.setState({ imageModalIsOpen: true })
    }

    closeImageModal() {
      this.setState({ imageModalIsOpen: false })
    }

    removeCard(id) {

      var deleteRoute = 'https://mojitobooks.pythonanywhere.com/post/' + id

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

    formatReview(cards) {
      if (cards == 1) {
        return '1 review'
      } else if (cards == 0) {
        return 'No reviews yet'
      } else {
        return cards + ' reviews'
      }
    }

    goToNew() {
      window.location = "/new"
    }
    
    render() {
      const { user, cards, sumclap } = this.state;
      const baseUrl = 'https://mojitobooks.pythonanywhere.com'

      const sumClap = (sum) => {
        if (sum > 1) {
          return "Clapped " + sum + " times."
        }
      }
  
      return (
  
        <div className="container-fluid">
  
          <div className="row text-align-center justify-content-center">
            <div className="col-12">
              <div className="row m-profile-info col-lg-6 col-md-8 col-sm-8 col-xs-*">
                <a onClick={this.openImageModal} className="m-profile-left">
                  <img className="rounded-circle m-profile-avatar" src={baseUrl + "/static/ProfileImage/" + user.profile_image} alt="" />                       
                </a>
                  <Modal
                    isOpen={this.state.imageModalIsOpen}
                    onRequestClose={this.closeImageModal}
                    contentLabel="Avatar"
                    style={profileStyle}
                  >

                    <ImageUpload />

                  </Modal>
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-*" style={{marginLeft: '-17px'}}>
                  <t className="m-profile-name">{user.name}</t>

                  <t className="m-profile-username">
                    @{user.username}
                  </t>
                  <t className="m-profile-description">
                    {this.formatReview(cards.length)}.{' '}
                  </t>
                  <t className="m-profile-description">
                    Joined {convertJoinDate(user.date_joined)}. 
                  </t>
                  <br />
                  <t className="m-profile-description">
                    {sumClap(sumclap)}
                  </t>

                  <div>
                    <button className="m-profile-button" onClick={this.openProfileModal}>
                      Edit Profile              
                    </button>
                    <Modal
                      isOpen={this.state.profileModalIsOpen}
                      onRequestClose={this.closeProfileModal}
                      contentLabel="Profile"
                      style={profileStyle}
                    >
                      <Account profileData={this.state.user} />
                    </Modal>

                    <button onClick={this.goToNew} className="m-profile-button">
                      New Post         
                    </button>
                  </div> 
                </div>         
              </div>

              <div className="row m-profile-info col-lg-6 col-md-8 col-sm-8 col-xs-*">
                <t className="m-profile-bio">{user.bio}</t>
              </div> 

              <div className="m-profile-filter" style={{marginBottom: '10px'}}>
                {/* <button className="btn m-profile-button" type="submit">{cards.length} Books</button>
                <button className="btn m-profile-button" type="submit">10 Following</button>
                <button className="btn m-profile-button" type="submit">88 Followers</button> */}
              </div> 
            </div>
  
            <div className="m-profile-card-container col-lg-6 col-md-8 col-sm-8 col-xs-*">           
              {cards.slice(0).reverse().map(function (card, i) { // map function with server data
                return (
                  <div className="m-profile-whole-card-cover rounded" key={i}>
                    <img onClick={() => goToCard(card.id)} className="card-img-top m-profile-card-cover rounded" src={baseUrl + "/static/CardPicture/" + card.picture} alt="" />
                    <p onClick={() => goToCard(card.id)} className="m-user-card-text">{card.title}</p>
                    <EditCard card={card}/>
                    <EmojiTags emojis={card.emoji} />
                  </div>
                )
              }.bind(this))}
            </div>
          </div>
        </div>
      );
    }
  }

export default ProfileScreen;