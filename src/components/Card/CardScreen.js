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
            <div>
                <div className="row m-row-center">
                    <div className="col-lg-4 col-md-12 m-row-center">
                        <div>
                            <img src={baseUrl + post.picture} />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-*">
                        <div>
                            {post.title}
                        </div>
                        <div>
                            {post.description}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CardScreen;