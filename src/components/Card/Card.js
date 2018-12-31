import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';
import axios from 'axios';

import CardScreen from './CardScreen.js';
import ErrorPage from '../Home/ErrorPage.js'


class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      post: null,
      userOwner: false
    }

    this.postId = props.match.params.postId;
  }

  async componentWillMount() {

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    var header = {
        "Access-Control-Allow-Origin": 'content-type',
        "Authorization": bearer
    }

    try {
      const response = await axios.get('http://127.0.0.1:5000/post/' + this.postId, { headers: header });
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
          <CardScreen post={this.state.post}/>
        ) : (
          <ErrorPage />
        )
      )
    );
  }
}

const LoadingScreen = () =>
  <div className="m-home-error-page">
    <p1 className="m-home-error-text">Loading...</p1>
  </div>

export default User;
