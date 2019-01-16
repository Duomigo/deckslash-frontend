
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css'

import MenuScrollBar from './MenuScrollBar';

import { getUser } from '../Authentication/AuthenStatus.js'
import { goToCard } from '../Authentication/AuthenStatus.js'

import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      users: []
    }
  }

  async componentDidMount() {
    const cards = await axios.get('http://127.0.0.1:5000/testcard');
    await this.setState({ posts: cards.data })

    const users = await axios.get('http://127.0.0.1:5000/testuser')
    await this.setState({ users: users.data })
  }

  getCurrentUser(id) {
    const ans = this.state.users[id-1].name
    return ans;
  }
  
  render() {
    const { posts, users } = this.state;
    const cardUrl = 'http://127.0.0.1:5000/static/CardPicture/';

    return (

      <div className="container-fluid">              
        <div className="row text-align-center justify-content-center">
          <div className="row col-12 justify-content-center">
            <div className="col-lg-7 col-md-8 col-sm-8 col-xs-*">
              <h1 className="m-home-latest">Fresh mojitos</h1>
            </div>
          </div>

          <div className="m-profile-card-container col-lg-7 col-md-8 col-sm-8 col-xs-*">           
            {posts.slice(0).reverse().map(function (post, i) { // reverse array map function with server data
              return (
                <div className="m-profile-whole-card-cover rounded" key={i}>
                  <img onClick={() => goToCard(post.id)} className="card-img-top m-profile-card-cover rounded" src={cardUrl + post.picture} alt="" />
                  <p onClick={() => goToCard(post.id)} className="m-user-card-text">{post.title}</p>
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
