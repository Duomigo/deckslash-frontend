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
                            <div className="m-profile-post-date">{convertDate(post.date_posted)}</div>
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