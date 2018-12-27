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

        const goToProfile = () => {
            var username = this.state.user.username
            window.location.href = '/u/' + username;
        }

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

                        <div className="m-profile-banner">
                            <img onClick={goToProfile} className="m-profile-post-avatar" src={profileUrl + user.profile_image} />
                            <div onClick={goToProfile} className="m-profile-post-name">{user.name}</div>
                            <br />
                            <div className="m-profile-post-date">{post.date_posted}</div>
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