import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';
import axios from 'axios';

import EmojiScreen from './EmojiScreen.js';
import ErrorPage from '../Home/ErrorPage.js'
import LoadingScreen from '../Home/LoadingScreen.js'


class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      post: null
    }

    this.emoji = props.match.params.emoji;
  }

  async componentWillMount() {

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    var header = {
        "Access-Control-Allow-Origin": 'content-type',
        "Authorization": bearer
    }

    try {
      const response = await axios.get('http://127.0.0.1:5000/tags/' + this.emoji, { headers: header });
      this.setState({post: response.data});
      this.setState({ loading: false })
    } catch (error) {
      this.setState({ loading: false })
    }
  }

  
  render() {

    return (
      (this.state.loading) ? (
        <LoadingScreen />
      ) : (
        (this.state.post) ? (
          <EmojiScreen post={this.state.post}/>
        ) : (
          <ErrorPage />
        )
      )
    );
  }
}

export default User;
