import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';

import EmojiTags from '../Card/EmojiTags';

import { goToCard } from '../Authentication/AuthenStatus.js'

class UserScreen extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        user: props.userData.user,
        cards: props.userData.cards
      }
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
    
    render() {
      const { user, cards, emojis } = this.state;
      const baseUrl = 'http://127.0.0.1:5000'
  
      return (
  
        <div className=" container-fluid">
  
          <div className="row text-align-center justify-content-center">
            <div className="col-12">
              <div className="row m-profile-info col-lg-7 col-md-8 col-sm-8 col-xs-*">
                <div className="m-profile-left">
                  <img className="rounded-circle m-profile-avatar" src={baseUrl + "/static/ProfileImage/" + user.profile_image} alt="" />     
                </div>
                
                <div className="col-lg-7 col-md-8 col-sm-8 col-xs-*" style={{marginLeft: '-17px'}}>
                  <t className="m-profile-name">{user.name}</t>

                  <t className="m-profile-username">
                    @{user.username}
                  </t>
                  <t className="m-profile-description">
                    {this.formatReview(cards.length)}.{' '}
                  </t>
                  <t className="m-profile-description">
                    Joined Dec 2018. 
                  </t>
                  <t className="m-profile-bio">{user.bio}</t>
                </div>

              </div>

              <div className="m-profile-filter" style={{marginBottom: '20px'}}>
                {/* <button className="btn m-profile-button" type="submit">
                  {cards.length} Books
                </button>
                <button className="btn m-profile-button" type="submit">10 Following</button>
                <button className="btn m-profile-button" type="submit">88 Followers</button> */}
              </div> 
            </div>
  
            <div className="m-profile-card-container col-lg-7 col-md-8 col-sm-8 col-xs-*">              
              {cards.slice(0).reverse().map(function (card, i) { // map function with server data
                return (
                  <div className="m-profile-whole-card-cover rounded" key={i}>
                    <img onClick={() => goToCard(card.id)} className="card-img-top m-profile-card-cover rounded" src={baseUrl + "/static/CardPicture/" + card.picture} alt="" />
                    <p onClick={() => goToCard(card.id)} className="m-user-card-text">{card.title}</p>
                    <EmojiTags emojis={card.emoji} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      );
    }
  }

export default UserScreen;