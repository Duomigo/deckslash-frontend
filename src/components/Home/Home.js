
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css'
import GuestNavbar from '../Navigation/GuestNavbar.js';
import MenuScrollBar from './MenuScrollBar';
import UserNavbar from '../Navigation/UserNavbar.js';

import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
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
    const baseUrl = 'http://127.0.0.1:5000/static/CardPicture/';

    const goToCard = (id) => {
      console.log(id);
      window.location.href = '/p/' + id;
    }

    return (

      <div className="container-fluid">

        <MenuScrollBar />

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-* col-xs-*">
              <h1 className="m-home-latest">Latest reviews</h1>
            </div>
          </div>

          <div className="row text-align-center justify-content-center">
            <div className="m-home-card-container col-lg-8 col-md-10 col-sm-* col-xs-*">
              {posts.slice(0).reverse().map(function (post, i) { // reverse array map function with server data
                return (
                  <div className="m-profile-whole-card-cover rounded" key={i}>
                    <img onClick={() => goToCard(post.id)} className="card-img-top m-profile-card-cover rounded" src={baseUrl + post.picture} alt="" />
                    <p className="m-user-card-text">{post.title}</p>
                    <p className="m-user-desc-text">{post.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
        

    );
  }
}

export default Home;
