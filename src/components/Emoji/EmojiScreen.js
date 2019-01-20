import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../styles/User.css';
import EmojiTags from '../Emoji/EmojiTags';

import { goToCard, goToUser } from '../Authentication/AuthenStatus';
import { Emoji } from 'emoji-mart';

class EmojiScreen extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            tagPosts: props.tagPosts,
            emoji: props.emoji
        }
    }

    render() {
        const { tagPosts, emoji } = this.state;
        const cardUrl = 'https://mojitobooks.pythonanywhere.com/static/CardPicture/';

        return(
            <div className="container-fluid" style={{marginTop: '10px'}}>      
                <div className="row text-align-center justify-content-center">
                    <div className="row col-12 justify-content-center">
                        <div className="col-lg-7 col-md-8 col-sm-8 col-xs-*">
                            <a className="m-home-emoji-latest">
                                <Emoji 
                                    set="twitter" 
                                    emoji={emoji} 
                                    size={40}
                                    onClick={(emoji, event) => {
                                        window.location.href = '/t/' + emoji.id
                                    }}
                                />
                            </a>
                            <span className="m-home-latest">{' '}{emoji}</span>
                        </div>
                    </div>
        
                    <div className="m-profile-card-container col-lg-7 col-md-8 col-sm-8 col-xs-*">           
                        {tagPosts.slice(0).reverse().map(function (post, i) { // reverse array map function with server data
                        return (
                            <div className="m-profile-whole-card-cover rounded" key={i}>
                                <img onClick={() => goToCard(post.id)} className="card-img-top m-profile-card-cover rounded" src={cardUrl + post.picture} alt="" />
                                <p onClick={() => goToCard(post.id)} className="m-user-card-text">{post.title}</p>
                                <p onClick={() => goToUser(post.author)} className="m-user-desc-text" style={{marginTop: '3px'}}>@{post.author}</p> 
                                <EmojiTags emojis={post.emoji} />         
                            </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default EmojiScreen;