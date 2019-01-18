import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'

class Moji extends Component {

    state = {
        emojis: [],
        icons: []
      };

    handleEmoji(newEmoji) {
        this.setState(prevState => ({
            icons: [newEmoji.id, ...prevState.icons.slice(0, 2)],
            emojis: [newEmoji, ...prevState.emojis.slice(0, 2)]
        }))
    }

    render() {

        const { emojis, icons } = this.state;

        return (
            <div>
                <Picker 
                    set="twitter"
                    title='Pick your emoji…' 
                    emoji='point_up'
                    onClick={(emoji, event) => {
                        this.handleEmoji(emoji)
                    }}
                />

                {emojis.map(function (emoji, i) {
                    console.log(emojis)
                    let emojiConfig;
                    if (emoji.skin) {
                        emojiConfig = ':' + emoji.id + '::skin-tone-' + emoji.skin + ':';
                    } else {
                        emojiConfig = emoji.id
                    }
                    
                    return (
                        <span>
                        <Emoji set="twitter" emoji={emojiConfig} size={40} />
                        </span>
                    )
                })}
            </div>
        )
    }
}

export default Moji;