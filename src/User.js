import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './User.css';
import Navbar from './Navbar.js';

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts:
        [
            {
              "url": "https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg",
              "title": "Measure what matters"
            },
            {
              "url": "https://blowoutbuzz.files.wordpress.com/2018/01/2018-topps-tier-one-bryant.jpg?w=1400",
              "title": "Zero to One, or One to N"
            },
            {
              "url": "http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg",
              "title": "Category design at its peak"
            },
            {
              "url": "https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg",
              "title": "American Studies"
            },
            {
              "url": "https://gogts.net/wp-content/uploads/2018/05/2018-Topps-Finest-Baseball-Cards-3.jpg",
              "title": "Plato is not a philosopher, he is a plain thinker."
            },
            {
              "url": "http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg",
              "title": "Category design at its peak"
            },
            {
              "url": "https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg",
              "title": "American Studies"
            },
            {
              "url": "https://gogts.net/wp-content/uploads/2018/05/2018-Topps-Finest-Baseball-Cards-3.jpg",
              "title": "Plato is not a philosopher, he is a plain thinker."
            },
            {
              "url": "https://gogts.net/wp-content/uploads/2018/05/2018-Topps-Finest-Baseball-Cards-3.jpg",
              "title": "Plato is not a philosopher, he is a plain thinker."
            },
          ]
    }
  }

  render() {

    const {posts} = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container content-main">
          <div className="row text-align-center">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <img className="rounded-circle m-profile-avatar" src="https://c1.staticflickr.com/5/4060/4385096719_9fef41ae09_b.jpg" alt="Card image cap" />
              <t className="m-profile-name">Justin Kan</t>
              <span className="m-profile-username">@jkan11</span>
              <t className="m-profile-desc">You can change nothing about the past but everything about the future.</t>

              <div className="m-profile-filter">
                <button className="btn navbar-button" type="submit">10 Following</button>
                <button className="btn navbar-button" type="submit">88 Followers</button>
              </div>
            </div>

            <div className="col-md-9 col-sm-* col-xs-*" style={{backgroundColor: 'grey'}}>
              <div className="m-profile-filter" style={{marginTop: '15px'}}>
                <button className="btn selected-navbar-button" type="submit">Activity</button>
                <button className="btn navbar-button" type="submit">Decks</button>
                <button className="btn follow-button" type="submit">Following</button>
              </div>
              <div className="container content-main">
                <div className="row justify-content-center">
                  {posts.map(function (post, i) { //map function with server data
                    return (
                      <figure className="m-profile-whole-card-cover rounded" key={i}>
                        <img className="card-img-top m-profile-card-cover rounded" src={post.url} alt="Card image cap" />
                        <figcaption class="m-profile-card-text">{post.title}</figcaption>
                      </figure>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
