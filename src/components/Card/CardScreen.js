import React, { Component } from 'react';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

import axios from 'axios';

import clapB from '../../images/m-clap.png'

import { convertDate } from '../Authentication/AuthenStatus'
import EmojiTags from '../Emoji/EmojiTags'

class CardScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: props.post,
            cardId: props.post.id,
            userOwner: {}
        }

        this.onClapPost = this.onClapPost.bind(this)
    }

    async componentDidMount() {
        var username = this.state.post.author
        const userData = await axios.get('https://mojitobooks.pythonanywhere.com/users/' + username);
        await this.setState({ userOwner: userData.data.user })

        this.setState({ claps: this.state.post.likes })

        console.log("your user")
        console.log(this.state.userOwner)
    }

    onClapPost = (event) => {

        const route = 'https://mojitobooks.pythonanywhere.com/clap/' + this.state.cardId

        const data = {}
        
        var header = {
            "Access-Control-Allow-Origin": 'X-Requested-With,content-type',
            "Authorization": 'Bearer ' + localStorage.getItem("accessToken")
        }

        axios.post(route, data, { headers: header })
        .then(res => {
            this.setState({ claps: this.state.claps + 1 })
        })
        .catch(err => {
            window.location.href = '/signin'
        })

        event.preventDefault();
    }

    render() {
        const { post, userOwner, claps } = this.state
        const cardUrl = 'https://mojitobooks.pythonanywhere.com/static/CardPicture/';
        const profileUrl = 'https://mojitobooks.pythonanywhere.com/static/ProfileImage/'

        const goToProfile = () => {
            var username = this.state.userOwner.username
            window.location.href = '/u/' + username;
        }

        return (
            <div className="container-fluid">
                <div className="row text-align-center justify-content-center" style={{marginTop: '30px'}}>

                    <div className="col-12">
                        <div className="row m-profile-info col-lg-6 col-md-10 col-sm-* col-xs-*">
                            <div className="col-sm-4 col-xs-* m-row-center">
                                <div style={{marginBottom: '20px'}}>
                                    <img className="m-profile-post-card rounded" src={cardUrl + post.picture}/>
                                </div>
                                <EmojiTags emojis={post.emoji} />
                            </div>

                            <div className="col-sm-8 col-xs-*">
                                <div className="m-profile-post-text">
                                    {post.title}
                                </div>

                                <div className="m-profile-banner">
                                    <img onClick={goToProfile} className="m-profile-post-avatar" src={profileUrl + userOwner.profile_image} />

                                    <div className="">
                                        <t className="m-profile-post-count">{claps}</t>
                                        <img onClick={this.onClapPost} className="m-profile-post-clap" src={clapB} />
                                    </div>

                                    <div onClick={goToProfile} className="m-profile-post-name">{userOwner.name}</div>
                                    <br />
                                    <div className="m-profile-post-date">{convertDate(post.date_posted)}</div>
                                </div>

                                <div className="m-profile-post-desc">
                                    {post.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardScreen;