import React, { Component } from 'react';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

class CardScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: props.post
        }
    }

    render() {
        const { post } = this.state
        const baseUrl = 'http://127.0.0.1:5000/static/CardPicture/';

        return (
            <div className="container">
                <div className="row" style={{marginTop: '30px'}}>

                    <div className="col-lg-4 col-md-12 m-row-center">
                        <div style={{marginBottom: '20px'}}>
                            <img className="m-profile-post-image rounded" src={baseUrl + post.picture}/>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-*">
                        <div className="m-profile-post-text">
                            {post.title}
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