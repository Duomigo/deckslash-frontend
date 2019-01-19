import React, { Component } from 'react';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

import axios from 'axios';

import clapB from '../../images/m-clap.png'

import EmojiTags from './EmojiTags'

class CardScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: props.post,
            cardId: props.post.id,
            userOwner: {},
            emojis: [
                {
                  "id": "joy_cat",
                  "name": "Cat Face with Tears of Joy",
                  "colons": ":joy_cat:",
                  "emoticons": [],
                  "unified": "1f639",
                  "skin": null,
                  "native": "😹"
                },
                {
                  "id": "flag-bt",
                  "name": "Bhutan Flag",
                  "colons": ":flag-bt:",
                  "emoticons": [],
                  "unified": "1f1e7-1f1f9",
                  "skin": null,
                  "native": "🇧🇹"
                },
                {
                  "id": "flag-vn",
                  "name": "Vietnam Flag",
                  "colons": ":flag-vn:",
                  "emoticons": [],
                  "unified": "1f1fb-1f1f3",
                  "skin": null,
                  "native": "🇻🇳"
                }
            ]
        }

        this.onClapPost = this.onClapPost.bind(this)
    }

    async componentDidMount() {
        var username = this.state.post.author
        const userData = await axios.get('http://127.0.0.1:5000/users/' + username);
        await this.setState({ userOwner: userData.data.user })

        this.setState({ claps: this.state.post.likes })

        console.log("your user")
        console.log(this.state.userOwner)
    }

    onClapPost = (event) => {

        const route = 'http://127.0.0.1:5000/clap/' + this.state.cardId

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
        const { post, user, userOwner, claps, emojis } = this.state
        const cardUrl = 'http://127.0.0.1:5000/static/CardPicture/';
        const profileUrl = 'http://127.0.0.1:5000/static/ProfileImage/'

        const goToProfile = () => {
            var username = this.state.userOwner.username
            window.location.href = '/u/' + username;
        }

        const convertDate = (dateStr) => {
            const year = dateStr.substring(0,4)
            const date = dateStr.substring(8,10)
            const month = dateStr.substring(5,7)

            let monthStr;

            switch (month) {
                case '01':
                  monthStr = "Jan";
                  break;
                case '02':
                  monthStr = "Feb";
                  break;
                case '03':
                  monthStr = "Mar";
                  break;
                case '04':
                  monthStr = "Apr";
                  break;
                case '05':
                  monthStr = "May";
                  break;
                case '06':
                  monthStr = "Jun";
                  break;
                case '07':
                  monthStr = "Jul";
                  break;
                case '08':
                  monthStr = "Aug";
                  break;
                case '09':
                  monthStr = "Sep";
                  break;
                case '10':
                  monthStr = "Oct";
                  break;
                case '11':
                  monthStr = "Nov";
                  break;
                case '12':
                  monthStr = "Dec";
                  break;
              }

              const dateFormat = monthStr + ' ' + date + ', ' + year
              return dateFormat
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