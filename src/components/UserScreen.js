
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import '../styles/User.css';

class UserScreen extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        user: props.userData.user,
        cards: props.userData.cards
      }
    }
    
    render() {
      const { user, cards } = this.state;
      const baseUrl = 'http://127.0.0.1:5000'
  
      return (
  
        <div className=" container-fluid">
  
          <div className="row text-align-center justify-content-center">
            <div className="col-12">
              <div className="row m-profile-info col-lg-6 col-md-10 col-sm-* col-xs-*">
                <div className="m-profile-left" style={{backgroundColor: 'yellow'}}>
                  <img className="rounded-circle m-profile-avatar" src={baseUrl + user.profile_image} alt="" />     
                </div>
                <div className="m-profile-right">
                  <t className="m-profile-name">{user.name}</t>
                  <span className="m-profile-username">@{user.username}</span>
                  <t className="m-profile-desc">{user.bio}</t>                           
                </div>
              </div>
              <div className="m-profile-filter">
                <button className="btn navbar-button" type="submit">5 Books</button>
                <button className="btn navbar-button" type="submit">10 Following</button>
                <button className="btn navbar-button" type="submit">88 Followers</button>
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

export default UserScreen;