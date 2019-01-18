import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';
import 'emoji-mart/css/emoji-mart.css';
import { Emoji } from 'emoji-mart';

class MenuScrollBar extends Component {

    state = {

        emojis: [
            {
              "id": "flag-bz",
              "name": "Belize Flag",
              "colons": ":flag-bz:",
              "emoticons": [],
              "unified": "1f1e7-1f1ff",
              "skin": null,
              "native": "🇧🇿"
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
            },
            {
              "id": "rolling_on_the_floor_laughing",
              "name": "Rolling on the Floor Laughing",
              "colons": ":rolling_on_the_floor_laughing:",
              "emoticons": [],
              "unified": "1f923",
              "skin": null,
              "native": "🤣"
            },
            {
              "id": "avocado",
              "name": "Avocado",
              "colons": ":avocado:",
              "emoticons": [],
              "unified": "1f951",
              "skin": null,
              "native": "🥑"
            },
            {
              "id": "joy",
              "name": "Face with Tears of Joy",
              "colons": ":joy:",
              "emoticons": [],
              "unified": "1f602",
              "skin": null,
              "native": "😂"
            },
            {
              "id": "skull_and_crossbones",
              "name": "Skull and Crossbones",
              "colons": ":skull_and_crossbones:",
              "emoticons": [],
              "unified": "2620-fe0f",
              "skin": null,
              "native": "☠️"
            },
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
              "id": "japanese_ogre",
              "name": "Japanese Ogre",
              "colons": ":japanese_ogre:",
              "emoticons": [],
              "unified": "1f479",
              "skin": null,
              "native": "👹"
            }
          ]
    }

    handleEmoji = (emoji) => {
        window.location = '/t/' + emoji.id;
    }

    render() {
        const { emojis } = this.state;

        return (
            <div className="m-menu-scroll-bar" style={{marginTop: '5px', marginBottom: '15px'}}>
                {/* <a href="#home">Featured</a>
                <a href="#news">Books</a>
                <a href="#contact">Business</a>
                <a href="#about">Design</a>
                <a href="#support">Education</a>
                <a href="#blog">Entertainment</a>
                <a href="#tools">Finance</a>  
                <a href="#custom">Health</a>
                <a href="#logo">Humor</a>
                <a href="#friends">Entrepreneurs</a> */}
                {emojis.map(function (emoji, i) {

                    let emojiConfig;

                    if (emoji.skin) {
                        emojiConfig = ':' + emoji.id + '::skin-tone-' + emoji.skin + ':';
                    } else {
                        emojiConfig = emoji.id
                    }

                    return (
                        <span style={{marginLeft: '20px'}}>
                            <Emoji 
                                set="twitter" 
                                emoji={emojiConfig} 
                                size={35} 
                                onClick={(emoji, event) => {
                                    this.handleEmoji(emoji);
                                }}
                            />
                        </span>
                    )
                })}
            </div>
        );
    }
}

export default MenuScrollBar;