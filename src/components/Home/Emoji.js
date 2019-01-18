import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });

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
                    title='Pick your emoji…' 
                    emoji='point_up'
                    onClick={(emoji, event) => {
                        this.handleEmoji(emoji)
                        console.log(emoji)
                    }}
                />

                {emojis.map(function (emoji, i) {
                    console.log("Icon is")
                    console.log(emojis)
                    console.log(icons)
                    return (
                        <Emoji set="twitter" emoji={{ id: emoji.id , skin: emoji.skin }} size={30} />
                    )
                })}
            </div>
        )
    }
}

export default Moji;