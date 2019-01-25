import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';
import 'emoji-mart/css/emoji-mart.css';
import { Emoji } from 'emoji-mart';

class MenuScrollBar extends Component {

    state = {

        emojis: [
            "rocket",
            "rainbow",
            "fire",
            "milky_way",
            "earth_americas",
            "bridge_at_night",
            "telescope",
            "building_construction",
            "keycap_ten",
            "brain",
            "statue_of_liberty",
            "flying_saucer",
            "tent",
            "football",
            "snail",
          ]
    }

    render() {
        const { emojis } = this.state;

        return (
            <div className="m-menu-scroll-bar" style={{marginTop: '5px', marginBottom: '15px'}}>
                {emojis.map(function (emo, i) {

                    let emojiConfig;

                    // if (emoji.skin) {
                    //     emojiConfig = ':' + emoji.id + '::skin-tone-' + emoji.skin + ':';
                    // } else {
                    //     emojiConfig = emoji.id
                    // }

                    return (
                        <span className="m-lm-emoji-tag-menu">
                            <Emoji 
                                set="twitter" 
                                emoji={emo} 
                                size={35}
                                onClick={(emoji, event) => {
                                    window.location.href = '/t/' + emoji.id
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