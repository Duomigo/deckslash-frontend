import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Emoji } from 'emoji-mart';

class EmojiTags extends Component {

    state = {
        emojis: this.props.emojis
    }

    render() {
        const { emojis } = this.state;
        return(
            <div>
                {emojis.map(function (emoji, i) {

                    return (
                        <span className="m-lm-emoji-tag">
                        <Emoji 
                            set="twitter" 
                            emoji={emoji} 
                            size={30}
                            onClick={(emoji, event) => {
                                window.location.href = '/t/' + emoji.id
                            }}
                        />
                        </span>
                    )
                })}
            </div>
        )
    }
}

export default EmojiTags;