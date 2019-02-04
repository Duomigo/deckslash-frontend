
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css'

import MenuScrollBar from './MenuScrollBar';
import EmojiTags from '../Emoji/EmojiTags';
import Footer from '../Navigation/Footer.js';
import LoadingScreen from './LoadingScreen.js';

import { goToCard, goToUser } from '../Authentication/AuthenStatus.js'

import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      users: [],
      loading: true,
      default_avatar: 'default-avatar.png',
      user_avatar: 'default-avatar.png'
    }
  }

  async componentDidMount() {
    const users = await axios.get('https://mojitobooks.pythonanywhere.com/testuser')
    await this.setState({ 
      users: users.data
    })

    const cards = await axios.get('https://mojitobooks.pythonanywhere.com/search');
    await this.setState({ 
      posts: cards.data,
      loading: false
    })
  }
  
  render() {
    const { posts, loading } = this.state;
    const cardUrl = 'https://mojitobooks.pythonanywhere.com/static/CardPicture/';

    return (

      <div style={{marginBottom: '-24px'}}>
        <MenuScrollBar />        
        <div className="container-fluid">      
          <div className="row text-align-center justify-content-center">
            <div className="row col-12 justify-content-center">
              <div className="col-lg-7 col-md-8 col-sm-8 col-xs-*">
                <h1 className="m-home-latest" style={{marginTop: '0px'}}>Fresh mojitos</h1>
              </div>
            </div>

            <div className="m-profile-card-container col-lg-7 col-md-8 col-sm-8 col-xs-*">           
              {posts.map(function (post, i) {
                return (
                  <div className="m-profile-whole-card-cover rounded" key={i}>
                    <img onClick={() => goToCard(post.id)} className="card-img-top m-profile-card-cover rounded" src={cardUrl + post.picture} alt="" />
                    <t onClick={() => goToCard(post.id)} className="m-user-card-text">{post.title}</t>
                    <t onClick={() => goToUser(post.author)} className="m-user-desc-text">@{post.author}</t> 
                    <EmojiTags emojis={post.emoji} />         
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        { loading ? <LoadingScreen /> : <Footer />}
      </div>
        
    );
  }
}

export default Home;