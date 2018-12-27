import React, { Component } from 'react';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

import axios from 'axios';

class CardScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: props.post,
            user: {}
        }
    }

    async componentDidMount() {
        var id = this.state.post.author
        const res = await axios.get('http://127.0.0.1:5000/testuser');
        await this.setState({ user: res.data[id-1] })
    }

    render() {
        const { post, user } = this.state
        const cardUrl = 'http://127.0.0.1:5000/static/CardPicture/';
        const profileUrl = 'http://127.0.0.1:5000/static/ProfileImage/'

        return (
            <div className="container">
                <div className="row" style={{marginTop: '30px'}}>

                    <div className="col-lg-4 col-md-12 m-row-center">
                        <div style={{marginBottom: '20px'}}>
                            <img className="m-profile-post-card rounded" src={cardUrl + post.picture}/>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-*">
                        <div className="m-profile-post-text">
                            {post.title}
                        </div>

                        <div>
                            <img className="m-profile-post-avatar" src={profileUrl + user.profile_image} />
                            <t className="m-profile-post-name">{user.name}</t>
                            <t className="m-profile-post-username">@{user.username}</t>
                        </div>

                        <div className="m-profile-post-desc">
                            {post.description}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CardScreen;