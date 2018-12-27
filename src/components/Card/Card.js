import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';
import axios from 'axios';

import CardScreen from './CardScreen.js';


class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      console.log(this.state.post)
    } catch (error) {
      console.log(error.response);
    }

    try {
      const accountResponse = await axios.get('http://127.0.0.1:5000/profile', { headers: header });
      const accountUsername = accountResponse.data.user.username;

      if (accountUsername === this.username) {
        this.setState({ userOwner: true })
      }

    } catch (error) {
      console.log(error.response);
    }
  }

  
  render() {

    return (
      (this.state.post) ? (
        <CardScreen post={this.state.post}/>
      ) : (
        <ErrorScreen />
      )
    );
  }
}

const ErrorScreen = () =>
  <div className="App">
    <p1>Error, user does not exist</p1>
  </div>

export default User;
