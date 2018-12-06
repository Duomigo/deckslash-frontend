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

      <div className="App">
        <MenuScrollBar />

        <div className="container">
          <div className="row">

            {/* <div className="m-profile-content-header">
              Latest Decks
            </div> */}
            
            <div className="container">
              <div className="row m-profile-card-container">
                {posts.map(function (post, i) { //map function with server data
                  return (
                    <div className="m-profile-whole-card-cover rounded" key={i} style={{backgroundColor: 'yellow'}}>
                      <img className="card-img-top m-profile-card-cover rounded" src={baseUrl + post.picture} alt="" />
                      <div className="m-profile-card-text">{post.title}</div>
                    </div>
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

export default Home;
