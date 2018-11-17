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
              "title": "Plato is not a philosopher, he is a plain thinker"
            },
          ]
    }
  }

  render() {

    const {posts} = this.state;

    return (
      <div className="container-fluid">
        <div className="App ">
          <Navbar />
          <div className="container m-profile-user-frame">
            <div className="">
              <img className="rounded m-profile-avatar float-left" src="https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg" alt="Card image cap" />
              <t className="m-profile-name">Rob Gronkowski</t>
              <span className="m-profile-username">@gronk88</span>
            </div>
          </div>

          <div className="content-main">

            <div className="container">
                <button class="btn navbar-button" type="submit">Decks</button>
                <button class="btn navbar-button" type="submit">Activity</button>
                <button class="btn navbar-button" type="submit">Following</button>
                <button class="btn navbar-button" type="submit">Followers</button>
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
    );
  }
}

export default User;
