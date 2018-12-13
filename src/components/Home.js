import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import '../styles/User.css'
import GuestNavbar from './Navigation/GuestNavbar.js';
import MenuScrollBar from './MenuScrollBar';
import UserNavbar from './Navigation/UserNavbar.js';

import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts:
        [
          {
            "url": "https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg",
            "title": "Measure what matters"
          }
        ]
    }
  }

  async componentDidMount() {
    const res = await axios.get('http://127.0.0.1:5000/testcard');
    console.log("Du lieu cho ban: ");
    console.log(res.data);
    await this.setState({ posts: res.data })
  }
  
  render() {
    const { posts } = this.state;
    const baseUrl = 'http://127.0.0.1:5000'

    return (

      <div className="Apple">

        <MenuScrollBar />

        <div className="row justify-content-center">
          <div className="m-profile-card-container col-lg-8 col-md-10 col-sm-* col-xs-*" style={{backgroundColor: "yellow"}}>
            {posts.map(function (post, i) { //map function with server data
              return (
                <div className="m-profile-whole-card-cover rounded" key={i}>
                  <img className="card-img-top m-profile-card-cover rounded" src={baseUrl + post.picture} alt="" />
                  <p className="m-profile-card-text">{post.title}</p>
                  <p className="m-profile-desc-text">Product Designer</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
        

    );
  }
}

export default Home;
